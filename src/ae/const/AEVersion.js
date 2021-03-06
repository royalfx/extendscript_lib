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
		AEVersion.CC2020
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
		"CC2020"
	];
}

/*
CC (12.0)
CC (12.1)
CC (12.2)
CC 2014 (13.0)
CC 2014.1 (13.1)
CC 2014.2 (13.2)
CC 2015.0 (13.5.0.347)
CC 2015.1 (13.6.0)
CC 2015.2 (13.7.0)
CC 2015.3 (13.8.0)
CC 2017 (14.0)
CC 2017 (14.1)
CC 2017 (14.2)
CC 2017 (14.2.1)
CC (15.0)
CC (15.0.1)
CC (15.1)
CC (15.1.1)
CC (15.1.2)
CC (16.0)
CC (16.0.1)
16.1
17
*/