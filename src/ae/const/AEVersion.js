// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date 11 Nov 2019
 */
function AEVersion(){
	//
}

AEVersion.CC = "12.0";
AEVersion.CC_1 = "12.1";
AEVersion.CC_2 = "12.2";

AEVersion.CC2014 = "13.0";
AEVersion.CC2014_1 = "13.1";
AEVersion.CC2014_2 = "13.2";

AEVersion.CC2015 = "13.5.0.347";
AEVersion.CC2015_1 = "13.6.0";
AEVersion.CC2015_2 = "13.7.0";
AEVersion.CC2015_3 = "13.8.0";

AEVersion.CC2017 = "14.0";
AEVersion.CC2017_1 = "14.1";
AEVersion.CC2017_2 = "14.2";
AEVersion.CC2017_2_1 = "14.2.1";

AEVersion.CC2018 = "15.0";
AEVersion.CC2018_0_1 = "15.0.1";
AEVersion.CC2018_1 = "15.1";

AEVersion.CC2019 = "16.0";
AEVersion.CC2019_0_1 = "16.0.1";
AEVersion.CC2019_1 = "16.1";

AEVersion.CC2020 = "17.0";
AEVersion.CC2020_0_1 = "17.0.1";
AEVersion.CC2020_0_2 = "17.0.2";
AEVersion.CC2020_0_4 = "17.0.4";
AEVersion.CC2020_0_5 = "17.0.5";
AEVersion.CC2020_0_6 = "17.0.6";
AEVersion.CC2020_1 = "17.1";
AEVersion.CC2020_1_1 = "17.1.1";
AEVersion.CC2020_1_2 = "17.1.2";
AEVersion.CC2020_1_3 = "17.1.3";
AEVersion.CC2020_1_4 = "17.1.4";
AEVersion.CC2020_5 = "17.5";
AEVersion.CC2020_5_1 = "17.5.1";
AEVersion.CC2020_6 = "17.6";
AEVersion.CC2020_7 = "17.7";

AEVersion.CC2021 = "18.0";
AEVersion.CC2021_0_1 = "18.0.1";
AEVersion.CC2021_1 = "18.1";
AEVersion.CC2021_2 = "18.2";
AEVersion.CC2021_2_1 = "18.2.1";
AEVersion.CC2021_4 = "18.4";
AEVersion.CC2021_4_1 = "18.4.1";

AEVersion.AE22 = "22.0";
AEVersion.AE22_0_1 = "22.0.1";
AEVersion.AE22_2 = "22.2";
AEVersion.AE22_2_1 = "22.2.1";
AEVersion.AE22_3 = "22.3";
AEVersion.AE22_4 = "22.4";
AEVersion.AE22_5 = "22.5";
AEVersion.AE22_6 = "22.6";

AEVersion.AE23 = "23.0";
AEVersion.AE23_1 = "23.1";
AEVersion.AE23_2 = "23.2";
AEVersion.AE23_2_1 = "23.2.1";
AEVersion.AE23_3 = "23.3";
AEVersion.AE23_4 = "23.4";
AEVersion.AE23_5 = "23.5";
AEVersion.AE23_6 = "23.6";

AEVersion.AE24 = "24.0";
AEVersion.AE24_0_1 = "24.0.1";
AEVersion.AE24_0_2 = "24.0.2";
AEVersion.AE24_1 = "24.1";
AEVersion.AE24_2 = "24.2";
AEVersion.AE24_3 = "24.3";
AEVersion.AE24_4 = "24.4";
AEVersion.AE24_5 = "24.5";
AEVersion.AE24_6 = "24.6";
AEVersion.AE24_6_2 = "24.6.2";


/**
 * @public
 * @static
 * @returns {Array}
 */
AEVersion.getList = function() {
	return [
		AEVersion.CC,
		AEVersion.CC_1,
		AEVersion.CC_2,

		AEVersion.CC2014,
		AEVersion.CC2014_1,
		AEVersion.CC2014_2,

		AEVersion.CC2015,
		AEVersion.CC2015_1,
		AEVersion.CC2015_2,
		AEVersion.CC2015_3,

		AEVersion.CC2017,
		AEVersion.CC2017_1,
		AEVersion.CC2017_2,
		AEVersion.CC2017_2_1,

		AEVersion.CC2018,
		AEVersion.CC2018_0_1,
		AEVersion.CC2018_1,
		AEVersion.CC2019,
		AEVersion.CC2019_0_1,
		AEVersion.CC2019_1,

		AEVersion.CC2020,
		AEVersion.CC2020_0_1,
		AEVersion.CC2020_0_2,
		AEVersion.CC2020_0_4,
		AEVersion.CC2020_0_5,
		AEVersion.CC2020_0_6,
		AEVersion.CC2020_1,
		AEVersion.CC2020_1_1,
		AEVersion.CC2020_1_2,
		AEVersion.CC2020_1_3,
		AEVersion.CC2020_1_4,
		AEVersion.CC2020_5,
		AEVersion.CC2020_5_1,
		AEVersion.CC2020_6,
		AEVersion.CC2020_7,
	
		AEVersion.CC2021,
		AEVersion.CC2021_0_1,
		AEVersion.CC2021_1,
		AEVersion.CC2021_2,
		AEVersion.CC2021_2_1,
		AEVersion.CC2021_4,
		AEVersion.CC2021_4_1,
	
		AEVersion.AE22,
		AEVersion.AE22_0_1,
		AEVersion.AE22_2,
		AEVersion.AE22_2_1,
		AEVersion.AE22_3,
		AEVersion.AE22_4,
		AEVersion.AE22_5,
		AEVersion.AE22_6,
	
		AEVersion.AE23,
		AEVersion.AE23_1,
		AEVersion.AE23_2,
		AEVersion.AE23_2_1,
		AEVersion.AE23_3,
		AEVersion.AE23_4,
		AEVersion.AE23_5,
		AEVersion.AE23_6,
	
		AEVersion.AE24,
		AEVersion.AE24_0_1,
		AEVersion.AE24_0_2,
		AEVersion.AE24_1,
		AEVersion.AE24_2,
		AEVersion.AE24_3,
		AEVersion.AE24_4,
		AEVersion.AE24_5,
		AEVersion.AE24_6,
		AEVersion.AE24_6_2
	];
}

/**
 * @public
 * @static
 * @returns {Array}
 */
AEVersion.getKeysList = function () {
	return [
		"CC",
		"CC_1",
		"CC_2",
		"CC2014",
		"CC2014_1",
		"CC2014_2",
		"CC2015",
		"CC2015_1",
		"CC2015_2",
		"CC2015_3",
		"CC2017",
		"CC2017_1",
		"CC2017_2",
		"CC2017_2_1",
		"CC2018",
		"CC2018_0_1",
		"CC2018_1",
		"CC2019",
		"CC2019_0_1",
		"CC2019_1",

		"CC2020",
		"CC2020_0_1",
		"CC2020_0_2",
		"CC2020_0_4",
		"CC2020_0_5",
		"CC2020_0_6",
		"CC2020_1",
		"CC2020_1_1",
		"CC2020_1_2",
		"CC2020_1_3",
		"CC2020_1_4",
		"CC2020_5",
		"CC2020_5_1",
		"CC2020_6",
		"CC2020_7",
	
		"CC2021",
		"CC2021_0_1",
		"CC2021_1",
		"CC2021_2",
		"CC2021_2_1",
		"CC2021_4",
		"CC2021_4_1",
	
		"AE22",
		"AE22_0_1",
		"AE22_2",
		"AE22_2_1",
		"AE22_3",
		"AE22_4",
		"AE22_5",
		"AE22_6",
	
		"AE23",
		"AE23_1",
		"AE23_2",
		"AE23_2_1",
		"AE23_3",
		"AE23_4",
		"AE23_5",
		"AE23_6",
	
		"AE24",
		"AE24_0_1",
		"AE24_0_2",
		"AE24_1",
		"AE24_2",
		"AE24_3",
		"AE24_4",
		"AE24_5",
		"AE24_6",
		"AE24_6_2"
	];
}