library("readxl")
devtools::install_github("ropensci/writexl")
library("dplyr")
library("forcats")
path <- "~/Dropbox/@farmradio-meta/cabi-beans-mystery-2019.xlsx"
cabi_beans <- read_excel(path, sheet=2) 
cabi_beans_geocodes <- read_excel(path, sheet=5) 


sheets <- excel_sheets(path);

# the bad old value = new value, read as "was"
# key gives the new contents, value gives old contents
cabi_beans_likeOrig <- cabi_beans %>% 
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place, "Mbeya DC" = "Mbeya Rural")) %>%
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place, "Mbeya Town" = "Mbeya" )) %>%
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place,  "Morogoro" = "Morogoro Town")) %>%
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place,  "Iringa DC" = "Iringa")) %>%
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place, "Iringa Town" = "Iringa MC" )) %>%
  mutate(id_corrected_replaced_place = fct_recode(id_corrected_replaced_place, "Njombe TC" = "Njombe Mjini"))

distinct_CABI_Cells <- cabi_beans_likeOrig %>% dplyr::distinct(id_corrected_replaced_place)
tmp <- writexl::write_xlsx(distinct_CABI_Cells)
system(paste0("open ",tmp))

cabi_beans_2017 <- read_excel(path, sheet=1)
str(cabi_beans_2017)
names(cabi_beans_2017)[13]<-"primary_location_corrected"
distinct_CABI_Cells_2017 <- cabi_beans_2017 %>% dplyr::distinct(primary_location_corrected)

str(cabi)
cabi_beans_2017%>% dplyr::distinct(occupation)

cabi_combine <- cabi_beans_2017 %>% dplyr::full_join(cabi_beans_likeOrig, by="id")

#TODO: fix column names on cabi_beans_likeOrig
library(tidyverse)

# create columns for each of the types. 
cabi_beans_likeOrig <- cabi_beans_likeOrig  %>%  
  mutate(hasBeans = case_when(grepl("Beans", commodity, ignore.case = TRUE) ~ TRUE,
                           grepl("Legumes", commodity, ignore.case = TRUE) ~ TRUE)) %>%
  mutate(hasMaize = case_when(grepl("Maize", commodity, ignore.case = TRUE) ~ TRUE)) %>%
  mutate(hasPotato = case_when(grepl("Potato", commodity, ignore.case = TRUE) ~ TRUE)) %>%
  mutate(hasCassava = case_when(grepl("Cassava", commodity, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isFarmer = case_when(grepl("smallscale farmer", occupation, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isExtensionTech = case_when(grepl("Extension Technician", occupation, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isMan = case_when(grepl("M", gender, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isWoman = case_when(grepl("F", gender, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isInputSupplier = case_when(grepl("input supplier", occupation, ignore.case = TRUE) ~ TRUE)) %>% 
  mutate(isAgroServices = case_when(grepl("Agro services", occupation, ignore.case = TRUE) ~ TRUE)) %>% 
    mutate(hasAny = TRUE) 

#cabi_beans_likeOrig %>% dplyr::distinct(occupation)
         
cabi_df <- 
  cabi_beans_likeOrig %>% 
  select (hasBeans, hasMaize, hasPotato, hasCassava,isFarmer,hasAny,isExtensionTech,isInputSupplier,isAgroServices,isMan,isWoman,place=id_corrected_replaced_place) %>%
  tidyr::gather (hasBeans,hasMaize,hasPotato,hasCassava,isFarmer,isExtensionTech,isInputSupplier,isAgroServices,hasAny,isMan,isWoman,key="crop",value="sums") %>%
    filter(sums==TRUE) %>%
    count(crop, place) %>%
    spread (crop, n)
names(cabi_beans_geocodes)[1] <- "place"
cabi_df <- cabi_df %>% left_join(cabi_beans_geocodes,by="place") %>% select(-cartodb_id)
  write.csv(file="cabi_2018_wMysteryBeans.csv",cabi_df %>% select(primary_location___corrected___think_this_is_district=place,maize=hasMaize,beans=hasBeans,cassava=hasCassava,potato=hasPotato,_any=hasAny,latitude,longitude,men=isMan,women=isWoman))       
  #cabi_beans_likeOrig %>% tidyr::gather(name, id_corrected_replaced_place, hasBeans, hasMaize, hasPotato, hasCassava) %>% dplyr::group_by(name, id_corrected_replaced_place) %>% dplyr::count() %>% tidyr::spread(name, n)
  
  #summarise_if(is.logical, funs(n = n()), na.rm = TRUE)

  #summarise_all(funs(n = n())) %>% select("id_corrected_replaced_place", "hasBeans_n", "hasMaize_n")
