window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3764","name":"PATHOLOGY_EGFR (PATHOLOGY_EGFR)","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csA33DE675{color:#000000;background-color:transparent;font-family:Calibri;font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"csA33DE675\">Derived from PATHOLOGY_RESULT_ATOM. Contains result values specifically for EGFR pathology tests.</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"C_SIMPLIFIED_NPS_MI_RDV_BDV_OMOP","id":"d10"}},{"field":"Schema","value":"C_SIMPLIFIED_NPS_MI_RDV_BDV_OMOP"},{"field":"Name","value":"PATHOLOGY_EGFR"},{"field":"Type","value":"Table"},{"field":"Title","value":"PATHOLOGY_EGFR"},{"field":"Module","value":[{"_type":"link","name":"PATHOLOGY","id":"m123"}]},{"field":"Sample field: Status","value":{"value":"Active","type":"LIST_CLOSED","_type":"custom_field"}}],"columns":[{"id":"column-35009","object_id":"column-35009","name":"PATIENT_NUMBER (Specifies which patient record this data is associated with)","name_without_path":"PATIENT_NUMBER (Specifies which patient record this data is associated with)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35507","object_id":"column-35507","name":"HUB_BDV_PATHOLOGY_SK","name_without_path":"HUB_BDV_PATHOLOGY_SK","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35010","object_id":"column-35010","name":"SITE_ID (The site with which this record is associated)","name_without_path":"SITE_ID (The site with which this record is associated)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35011","object_id":"column-35011","name":"PATHOLOGY_ID (The pathology_id from the source CIS system. )","name_without_path":"PATHOLOGY_ID (The pathology_id from the source CIS system. )","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35012","object_id":"column-35012","name":"PATHOLOGY_TEST_DATETIME (Date and Time of Pathology Test)","name_without_path":"PATHOLOGY_TEST_DATETIME (Date and Time of Pathology Test)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35013","object_id":"column-35013","name":"PATHOLOGY_TEST_TYPE (Type of Pathology test recorded)","name_without_path":"PATHOLOGY_TEST_TYPE (Type of Pathology test recorded)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35014","object_id":"column-35014","name":"LOINC_CODE (Universal standard codes for identifying medical laboratory observations)","name_without_path":"LOINC_CODE (Universal standard codes for identifying medical laboratory observations)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35015","object_id":"column-35015","name":"LOINC_CODE_VALID_INDICATOR (Indicator to specify whether LOINC code is valid or not)","name_without_path":"LOINC_CODE_VALID_INDICATOR (Indicator to specify whether LOINC code is valid or not)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35016","object_id":"column-35016","name":"RESULT_VALUE_CIS (Result number as received from CIS System)","name_without_path":"RESULT_VALUE_CIS (Result number as received from CIS System)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35017","object_id":"column-35017","name":"RESULT_VALUE_STND (Result number from CIS standardised in DWH up to 20 decimals.)","name_without_path":"RESULT_VALUE_STND (Result number from CIS standardised in DWH up to 20 decimals.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35018","object_id":"column-35018","name":"RESULT_VALUE_TYPE (Type of Result value supplied by CIS system.)","name_without_path":"RESULT_VALUE_TYPE (Type of Result value supplied by CIS system.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35019","object_id":"column-35019","name":"DETECTED_CIS_UNIT_OF_MEASURE (Unit of Measure for the Result value supplied by CIS.)","name_without_path":"DETECTED_CIS_UNIT_OF_MEASURE (Unit of Measure for the Result value supplied by CIS.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35020","object_id":"column-35020","name":"RESULT_UNIT_OF_MEASURE_STND (Unit of Measure for the Result value supplied by CIS.)","name_without_path":"RESULT_UNIT_OF_MEASURE_STND (Unit of Measure for the Result value supplied by CIS.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35021","object_id":"column-35021","name":"RESULT_AVAILABLE_INDICATOR (Flag to specify whether the result is available.)","name_without_path":"RESULT_AVAILABLE_INDICATOR (Flag to specify whether the result is available.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35022","object_id":"column-35022","name":"RESULT_VALID_RANGE_INDICATOR (Flag to specify whether the result is in the valid (possible) range for the test)","name_without_path":"RESULT_VALID_RANGE_INDICATOR (Flag to specify whether the result is in the valid (possible) range for the test)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35023","object_id":"column-35023","name":"RESULT_VALID_FORMAT_INDICATOR (Flag to specify whether the result is in valid format.)","name_without_path":"RESULT_VALID_FORMAT_INDICATOR (Flag to specify whether the result is in valid format.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35024","object_id":"column-35024","name":"RESULT_INVALID_REASON (Description of reason for the result to be considered as invalid.)","name_without_path":"RESULT_INVALID_REASON (Description of reason for the result to be considered as invalid.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35025","object_id":"column-35025","name":"RESULT_IMPORT_INDICATOR (Flag which specifies whether result was imported.)","name_without_path":"RESULT_IMPORT_INDICATOR (Flag which specifies whether result was imported.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35026","object_id":"column-35026","name":"RESULT_HEADER_ONLY_INDICATOR (Flag which specifies whether result is header only or contains details.)","name_without_path":"RESULT_HEADER_ONLY_INDICATOR (Flag which specifies whether result is header only or contains details.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35027","object_id":"column-35027","name":"RESULT_TRANSMISSION_TYPE (Type of transmission of results into CIS system.)","name_without_path":"RESULT_TRANSMISSION_TYPE (Type of transmission of results into CIS system.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35028","object_id":"column-35028","name":"GFR_EGFR_RESULT_VALUE_RANGE (Ranges specified for the result type)","name_without_path":"GFR_EGFR_RESULT_VALUE_RANGE (Ranges specified for the result type)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-01-13 02:29"};