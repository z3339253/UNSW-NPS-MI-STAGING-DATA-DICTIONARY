window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3775","name":"REQUESTED_TEST (REQUESTED_TEST)","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csA33DE675{color:#000000;background-color:transparent;font-family:Calibri;font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"csA33DE675\">Contains the details of any medical tests requested for a patient. Examples include: &nbsp;Imaging (eg Xray, CT, MRI, Ultrasound), &nbsp;Blood Tests (eg FBC, TFT, HDL &nbsp;etc), Cytology, Histology, ECG, skin prick etc. &nbsp;This table does not contain any test results, only the details as provided on the test request form. &nbsp;Multiple records per patient.</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"C_SIMPLIFIED_NPS_MI_RDV_BDV_OMOP","id":"d10"}},{"field":"Schema","value":"C_SIMPLIFIED_NPS_MI_RDV_BDV_OMOP"},{"field":"Name","value":"REQUESTED_TEST"},{"field":"Type","value":"Table"},{"field":"Title","value":"REQUESTED_TEST"},{"field":"Module","value":[{"_type":"link","name":"REQUESTED_TEST","id":"m127"}]},{"field":"Sample field: Status","value":{"value":"Active","type":"LIST_CLOSED","_type":"custom_field"}}],"columns":[{"id":"column-35254","object_id":"column-35254","name":"PATIENT_NUMBER (Specifies which patient record this data is associated with)","name_without_path":"PATIENT_NUMBER (Specifies which patient record this data is associated with)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35255","object_id":"column-35255","name":"PATIENT_UUID","name_without_path":"PATIENT_UUID","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35256","object_id":"column-35256","name":"SITE_ID (Specifies which site (practice) this data is associated with)","name_without_path":"SITE_ID (Specifies which site (practice) this data is associated with)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35257","object_id":"column-35257","name":"PROVIDER_ID (Specifies the clinician associated with the record of information)","name_without_path":"PROVIDER_ID (Specifies the clinician associated with the record of information)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35258","object_id":"column-35258","name":"SOURCE_SYSTEM (Code specifying the CIS software the data originated from.)","name_without_path":"SOURCE_SYSTEM (Code specifying the CIS software the data originated from.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35259","object_id":"column-35259","name":"SOURCE_TABLE (Name of the CIS table the data is derived from.)","name_without_path":"SOURCE_TABLE (Name of the CIS table the data is derived from.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35260","object_id":"column-35260","name":"REQUEST_ID (Request identifier.)","name_without_path":"REQUEST_ID (Request identifier.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35261","object_id":"column-35261","name":"REQUEST_NO (Request number.)","name_without_path":"REQUEST_NO (Request number.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35262","object_id":"column-35262","name":"REQUEST_DATE (Date of requested test.)","name_without_path":"REQUEST_DATE (Date of requested test.)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35263","object_id":"column-35263","name":"REQUEST_STATUS_CODE (Rrequested test code.)","name_without_path":"REQUEST_STATUS_CODE (Rrequested test code.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35264","object_id":"column-35264","name":"PROVIDER_LAB_NAME (Requested test laboratory name provider.)","name_without_path":"PROVIDER_LAB_NAME (Requested test laboratory name provider.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35265","object_id":"column-35265","name":"TEST_REASON (Requested test reason.)","name_without_path":"TEST_REASON (Requested test reason.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35266","object_id":"column-35266","name":"REQUESTED_TESTS (The test(s) requested)","name_without_path":"REQUESTED_TESTS (The test(s) requested)","description":"","is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35267","object_id":"column-35267","name":"EORDER_NO (Requested test e-order number.)","name_without_path":"EORDER_NO (Requested test e-order number.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35268","object_id":"column-35268","name":"REASON_DISCARD (Requested test reason for discard.)","name_without_path":"REASON_DISCARD (Requested test reason for discard.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35269","object_id":"column-35269","name":"LOCATION_ID (Requested test location identifier. )","name_without_path":"LOCATION_ID (Requested test location identifier. )","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35270","object_id":"column-35270","name":"RECORD_STATUS (Requested test record status. )","name_without_path":"RECORD_STATUS (Requested test record status. )","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35271","object_id":"column-35271","name":"REQUEST_TYPE (What type of test was requested? )","name_without_path":"REQUEST_TYPE (What type of test was requested? )","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35272","object_id":"column-35272","name":"FASTING (Fasting requirement. )","name_without_path":"FASTING (Fasting requirement. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35273","object_id":"column-35273","name":"PREGNANT (Requested test related to pregnancy. )","name_without_path":"PREGNANT (Requested test related to pregnancy. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35274","object_id":"column-35274","name":"LAST_MENSTRUAL_PERIOD_DATE (Date of last menstrual period before pregnancy.)","name_without_path":"LAST_MENSTRUAL_PERIOD_DATE (Date of last menstrual period before pregnancy.)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35275","object_id":"column-35275","name":"ESTIMATED_CONFINEMENT_DATE (Pregnancy estimated confinement date)","name_without_path":"ESTIMATED_CONFINEMENT_DATE (Pregnancy estimated confinement date)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35276","object_id":"column-35276","name":"URGENT (Requested test urgent flag. )","name_without_path":"URGENT (Requested test urgent flag. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35277","object_id":"column-35277","name":"URGENT_BY (The clinical user ID of the person who marked the request as urgent)","name_without_path":"URGENT_BY (The clinical user ID of the person who marked the request as urgent)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35278","object_id":"column-35278","name":"URGENT_PHONE (Requested test urgent phone request)","name_without_path":"URGENT_PHONE (Requested test urgent phone request)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35279","object_id":"column-35279","name":"URGENT_FAX (Requested test urgent fax reques)","name_without_path":"URGENT_FAX (Requested test urgent fax reques)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35280","object_id":"column-35280","name":"SMEAR_SITE (Cervical cytology smear site. )","name_without_path":"SMEAR_SITE (Cervical cytology smear site. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35281","object_id":"column-35281","name":"CERVIX (Cervical cytology appearance. )","name_without_path":"CERVIX (Cervical cytology appearance. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35282","object_id":"column-35282","name":"EROSION (Cervical erosion)","name_without_path":"EROSION (Cervical erosion)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35283","object_id":"column-35283","name":"ECTROPION (Requested test ectropion. )","name_without_path":"ECTROPION (Requested test ectropion. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35284","object_id":"column-35284","name":"POST_NATAL (Requested test post-natal. )","name_without_path":"POST_NATAL (Requested test post-natal. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35285","object_id":"column-35285","name":"POST_MENOPAUSAL (Requested test post-menopausal. )","name_without_path":"POST_MENOPAUSAL (Requested test post-menopausal. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35286","object_id":"column-35286","name":"ORAL_CONTRACEPTIVE_PILL (Requested test oral contraceptive pill. )","name_without_path":"ORAL_CONTRACEPTIVE_PILL (Requested test oral contraceptive pill. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35287","object_id":"column-35287","name":"HORMONE_REPLACEMENT_THERAPY (Requested test related to hormone replacement therapy. )","name_without_path":"HORMONE_REPLACEMENT_THERAPY (Requested test related to hormone replacement therapy. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35288","object_id":"column-35288","name":"HYSTERECTOMY (Requested test related to hysterectomy. )","name_without_path":"HYSTERECTOMY (Requested test related to hysterectomy. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35289","object_id":"column-35289","name":"RADIORX (Requested test related to radiotherapy. )","name_without_path":"RADIORX (Requested test related to radiotherapy. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35290","object_id":"column-35290","name":"INTRAUTERINE_CONTRACEPTIVE_DEVICE (Requested test related to Intrauterine contraceptive device (IUD). )","name_without_path":"INTRAUTERINE_CONTRACEPTIVE_DEVICE (Requested test related to Intrauterine contraceptive device (IUD). )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35291","object_id":"column-35291","name":"BLEEDING (Requested test requires bleeding. )","name_without_path":"BLEEDING (Requested test requires bleeding. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35292","object_id":"column-35292","name":"COPIES (Requested test copies ordered.)","name_without_path":"COPIES (Requested test copies ordered.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35293","object_id":"column-35293","name":"BILLING (Billing service of requested test. )","name_without_path":"BILLING (Billing service of requested test. )","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35294","object_id":"column-35294","name":"PAP_REGISTER (Requested test results sent to PAP register. )","name_without_path":"PAP_REGISTER (Requested test results sent to PAP register. )","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35295","object_id":"column-35295","name":"CREATED_DATETIME (Date/time stamp of when the record was created in the CIS)","name_without_path":"CREATED_DATETIME (Date/time stamp of when the record was created in the CIS)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35296","object_id":"column-35296","name":"CREATED_BY (The clinical user ID of the person who created the record)","name_without_path":"CREATED_BY (The clinical user ID of the person who created the record)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35297","object_id":"column-35297","name":"UPDATED_DATETIME (Date/time stamp of when the record was updated in the CIS)","name_without_path":"UPDATED_DATETIME (Date/time stamp of when the record was updated in the CIS)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35298","object_id":"column-35298","name":"UPDATED_BY (The clinical user ID of the person who updated the record)","name_without_path":"UPDATED_BY (The clinical user ID of the person who updated the record)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35299","object_id":"column-35299","name":"VISIT_ID (Visit identifier.)","name_without_path":"VISIT_ID (Visit identifier.)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35300","object_id":"column-35300","name":"VISIT_UPDATED (Visited updated flag.)","name_without_path":"VISIT_UPDATED (Visited updated flag.)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35301","object_id":"column-35301","name":"OMD_EFFECTIVE_DATETIME (Metadata column.)","name_without_path":"OMD_EFFECTIVE_DATETIME (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35302","object_id":"column-35302","name":"OMD_SOURCE_ROW_ID (Metadata column.)","name_without_path":"OMD_SOURCE_ROW_ID (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35303","object_id":"column-35303","name":"OMD_INSERT_MODULE_INSTANCE_ID (Metadata column.)","name_without_path":"OMD_INSERT_MODULE_INSTANCE_ID (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35304","object_id":"column-35304","name":"OMD_EXPIRY_DATETIME (Metadata column.)","name_without_path":"OMD_EXPIRY_DATETIME (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"TIMESTAMP","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35305","object_id":"column-35305","name":"OMD_CURRENT_RECORD_INDICATOR (Metadata column.)","name_without_path":"OMD_CURRENT_RECORD_INDICATOR (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35306","object_id":"column-35306","name":"OMD_DELETED_RECORD_INDICATOR (Metadata column.)","name_without_path":"OMD_DELETED_RECORD_INDICATOR (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35307","object_id":"column-35307","name":"OMD_RECORD_SOURCE_ID (Metadata column.)","name_without_path":"OMD_RECORD_SOURCE_ID (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"INT64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-35308","object_id":"column-35308","name":"OMD_HASH_FULL_RECORD (Metadata column.)","name_without_path":"OMD_HASH_FULL_RECORD (Metadata column.)","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-01-13 02:29"};