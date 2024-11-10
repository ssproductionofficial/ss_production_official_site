'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0db3d9f54d3329d0ba6a12e3206bc6c7",
".git/config": "d0524288bb506e5b06912afeeb4492a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "51762c12cb1e7d9980c1a0caa2d35076",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7d3adc279a38dfb05c651e71978d51b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af1762167330be4b99cb778f2d536361",
".git/logs/refs/heads/main": "f104f43482224e9b593530705c44258d",
".git/logs/refs/remotes/origin/main": "b77f7f6e0e8cd4d63cf15df8572eb900",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/0eef487c1f519c2a6f80a03ab50b9288e1f896": "5ac7e7b2ef3a3c452fc4299144ddb501",
".git/objects/03/01aa62e490dbf4443e6b735eda1762056f3ce2": "a370f9840b516c125287c332191d1777",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/8ecc956ddab039d044903eaed7e98708ce7cce": "637cab5e55ff998922952730d1320e84",
".git/objects/10/213bee3ccb41447188a50a334d6b5b527898c3": "ba7efa50becd14c73bd8a70a15fe05a4",
".git/objects/11/19bca7419444d2cc83838c9a49e451c858c94e": "5e72eb9b34dabd7624bee81fc0749fa7",
".git/objects/12/708b92f23d1a538b1de984317df18695134301": "f8a39b7bfc5fc7a84e968ff2092a6b4c",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/15/e008985ab9ec0776da12f2915fc115a8795c99": "27de6c97207441a3a76d7b94362559e0",
".git/objects/17/ee1c93c373eecbc1bd870390cd44c1876c3a28": "22c6ceaba7f2dba79f1486ed088be3a6",
".git/objects/1b/6c8669deff2102148f00e1ed783182174f8a71": "3bffd412cc41145e9641e510592411ca",
".git/objects/1e/bb5617caa64ba5fc993824ae3c62643a4edeb8": "f01c430d3353e5ce51051f584165b6c5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/c27425452fae4c9ec3600af4561aefaece3985": "905758a7c39473b59ec36aa83d454524",
".git/objects/20/c000fd90bfb3de1a5c49569d353cbb225948e4": "a128fd6b372c60797e1799e54cd98e72",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/ea7dffd5da038896ac40489a4a09fcc590dff4": "c3a66e88976781a02dc452850395142e",
".git/objects/2f/448fc4a8495dc6b6621198da71a6a60cf21ff5": "1cd0f273920cb240be0634b57598991c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/4d65f93e7580b36d1e983fb84f1cab53858701": "89ec0dd6a3d450a040509395c1bb469e",
".git/objects/36/6b97e7cd64d2d181543bf5e25e0c99ede9bcb3": "222f175c4d2d944efce44c4a6333ca9d",
".git/objects/36/8e1c781f128f451ab8adf20344f7172fc381ee": "4517c25a99572cbf57e4795b00ca7953",
".git/objects/38/4c2a3deb297d702ff4ff75ebf7c462d37d024d": "dc2967b01ffda6089f5c1f183beae00e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/747cb00f25e7741ace1be2ee573623f2da553e": "d724ee1b50b173370b384dc492673d77",
".git/objects/3e/51c0960a73e5b621b61a91f6916f5c73b9a93f": "971ae94d2fb4c50bc9f971408207cdb7",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/b641a98e538f673f806c7764d0f1c06b28a953": "e8163fc2ded710065847f87b8f53d238",
".git/objects/42/c858a2a691dcd6415b2b2ca0bd963f21982dd9": "e01e20e3f07a8a57b54fdbae7a42781c",
".git/objects/44/09375676c8b326eef2360e4e245c749669918f": "b8bc5290845de7ec5f5da2b5fbb81a46",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/d306e7d40e12272be74e38895f149e10367449": "29893865759765fa27f96eaa0da06230",
".git/objects/46/9ed6a9082bef9a5c3c45b1556ee39172cb2206": "2acb3b34edc5879b94ea5cfe5afccf4b",
".git/objects/4f/4603a6eccfc32922141c1ea818322cb9889fe2": "f95e0e974c17fce56df364d54e39c886",
".git/objects/51/d1afb11f3d286d6f4f96604d8c0e9bdb55f5f6": "c3eb9884c98ba488816b570d982334c1",
".git/objects/52/fa25f66be079ac164cec461e88d91de6892e5c": "3c7bd40cd0885829c7cbe9c0d13e4fda",
".git/objects/57/0c3b839ed005e629f3fc1a9e3aeff361019cc2": "052d64eb97e4e8447167a13403d11132",
".git/objects/57/7be70580a2993ea605f398788ec0186698dc0c": "edcbac436637606e040ddf2d2ce2c97c",
".git/objects/5b/793d06ad5f9bbd1ea9dd91cc68ab7451570484": "c7c78124a67127ebee1f4d6ee6908b50",
".git/objects/5c/ea9318b1ddfa8782b8570c5d257ec56cafb646": "30d9dd2b13e57c099a76b4d737d5cfc9",
".git/objects/68/ae3c242398e915067b97595bd2656d0609ece4": "ef71497491e8b3a5b989a886e9452b7b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7a/00e0940423b700ffacf6e7b530dc30f1b61b4e": "58e00edbacfe6d6073c42cc950314549",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/421f50da4003610737858ac3f64e7af83db852": "145c50175aba7d3e10702582b4f39f10",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/c4f59dfd59e1d1ec2e29225e24e2e1942e2c60": "9182579797087ee13e5b37979e8b5929",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/30b0dc07aee84f99f9a6979a5d0ed109633808": "cb89fe0dcd3d5bfa33756cd1ba7a6f18",
".git/objects/87/f12c864db71074ef1a4232bc59e44a5edc584c": "0901257a2354ce0b6c7d2340eb7b9d96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5010ef2d1273aee70b1a64559eb977e060beef": "24f055c516c8b76bfd06951fc7d9489e",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/faa78f10caefb0c875e207589e6251c00abac2": "0b801dd881c541eb1b2d7d868fbefe93",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/1dc219f7a444cefba847c50a6b308d6d6e484f": "78de34e9ff231ab746c7a940da3b90c3",
".git/objects/92/e452d42e6ba9c6f94c057d0cbd113107515960": "3b185a5060b8182e07e85b5e4a36c084",
".git/objects/93/1a27c0ca4bec25301a91bfa7ff9e1763d951a9": "6b62def5a420bfea35d34b35f17e2c9f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/e30270f3e0024eeb12fa6c63a2df59512e93b8": "bdf7eb26714e776b94dfe5b2b69e7daa",
".git/objects/9a/e4bc933b11766dad7185995e61fce5ccc56c3b": "bde5b925fe4215cfacdc9da27bbd2658",
".git/objects/9b/f777ad76df47dabb8d12df135f620bb4b9339a": "79f002c3dbbbe25ef75ec9165346e601",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/63e02dfa87eb13f3f52b9bd28ff0f7ba935b4f": "f47eb78626e12edca6cb0c7902418ad2",
".git/objects/9f/e345299b89d05d01aeded0e769c3e73b268262": "aab6bf2021820ccc2651d608d0204632",
".git/objects/a3/ab6e3b1f813ab33c9bfaafd81a1fd2621ffaf8": "d31996a544b599026648ff6079c56683",
".git/objects/a5/3ae8ea55de2747282d30072f4aa02fdea98bcc": "53f7bd7b7af632bb2634e3efa4e81909",
".git/objects/a7/0f057f121eebfb87bf5f6d8c626ff57aba3e45": "db4ab52df7051711b4ff37b6b26af9db",
".git/objects/ab/adc3011a305ad025bd54e58bd37e9fd0b45590": "fa98bf6d2235751f7a2c27638e836e05",
".git/objects/ad/871d51f0525ab7b12da99a1d9133d818f037f1": "344a6e51018a77925cbd0808555a7c83",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/2b86fc3844dd54d43bd147e3447b07ce38d3e8": "ef01435a591c255490a7561ca9443746",
".git/objects/b7/292124e371e7514a4b1d8ad70d939a96663069": "a7f9122f43f5747aec74b836ce2bd684",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/7309bcbac316793d3c238d6b6e4d16b15b3ced": "040d6007964fe9d2386a6be903fbaedf",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/27b4b4a6c60e933c18c96b8fceef3886339301": "1b9d48a9c59f66d57c4b3160327e3aa0",
".git/objects/bd/dfa04af6d45ad29bab5109a73121533988cd85": "b9178074d1fda1e0f99b5cac57e2cd08",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c5/b8354cb0afbdde169924d0c3c5fc508a8c046d": "6b524ff6cf963f07858fe77195c471af",
".git/objects/c8/c8545dc9fa4a00b445ea20cc43c6b525a8490e": "0dc371316a2d60c68b8acd7b0261fb2f",
".git/objects/c9/30d137e6b75af7ca2831c97b683106ea66de11": "b02fb728277d3aa39b0c4c91ec1e7686",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/fbfd649ccf9813c41a7dae82ccc58624d35f20": "d243c48fa72089b7d1545c1c38a1840c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d75b2ee10ee629adf88082f72bebaa47449619": "70b0f1f4272a18f5fd240ad8c069b92c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/b89d183b5d7ded57e37a4d3c0a011dbc508890": "da9109901d64ddf3784feafa5b184122",
".git/objects/df/033668fd96d0cc9f1e702e674a34702473f4fd": "13309d4129155f07b4d585b72725f556",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e1/cdfd526afbb819d2ee54f5fc72973e87011976": "6fb652f50d44fb7510dafa2f5fce5425",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e8/6f2bd74ac082b8eca4d97378108387325e8ee2": "46a998b0638a3be0153da92c598c47a9",
".git/objects/ea/b61d2e718072f03e183cfc7e4e9c6941a3d8e3": "3e1bfa822e5089a234c1e8a86d0a97ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/219dc6ff077665e12b27861f2f9bc2b007506d": "15502e588fbf4349a0ea3ed8cd632746",
".git/objects/ee/1f2582c19dd5c26b7e5d6401b74c9c71ea896e": "00eec49c1f554bf7f10214330267a4fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/9d53db3600eeca3255c45f2c680bafc6d43178": "a0fe3f6ecbe36758abc5b537a388196f",
".git/objects/fb/f0d740069f6e2bc4abb4f200f0333787ebb843": "f43ff3e7e5be869bcf5dc07a8bcca526",
".git/objects/fd/f9cc81da5a88a85b73d81bb51b34a3b90d7c73": "5e323c959919ea2a37b22c8ba2b65545",
".git/objects/pack/pack-6b87f14ec1ebb2c9b23df3564a457f8151b4afd1.idx": "9d1db6f6267e29e7f7ef0c743647a9c0",
".git/objects/pack/pack-6b87f14ec1ebb2c9b23df3564a457f8151b4afd1.pack": "a554679fc741f0032cae0755c6c8be47",
".git/objects/pack/pack-6b87f14ec1ebb2c9b23df3564a457f8151b4afd1.rev": "3930994d37267726a5806c5d88bb522d",
".git/ORIG_HEAD": "7dec91e923224875756de8c7f9b67c8e",
".git/refs/heads/main": "7dec91e923224875756de8c7f9b67c8e",
".git/refs/remotes/origin/main": "ce86e7457fa63afda59ddc5f152aa90e",
"assets/AssetManifest.bin": "5b05356c9c37201758e981bb0e2b1e97",
"assets/AssetManifest.bin.json": "0e5142791c41b9dc1241f940ab37de83",
"assets/AssetManifest.json": "c0a9ae7929988c06a6ac7aadada7e638",
"assets/assets/animation/animation404.json": "b82c17e16b53bd949500edd5cbda96b2",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/aboutUsLogo.png": "6b7afa00458db2e2783aeb5e2f61b4c3",
"assets/assets/images/aboutUsPolygon.png": "98b34d0e9c419b68b4b95d24ce677c25",
"assets/assets/images/appDevIcon.png": "51b9fd5cf8f34e5332b6eabf33e897ff",
"assets/assets/images/backendIcon.png": "c5140dc33d35ed765a8d5e877de23c70",
"assets/assets/images/blogLogo.png": "f5346e71fa93040aa3deaae7d5e98ed2",
"assets/assets/images/c1.jpeg": "786b15dbc0cc11a25022e50f12f16495",
"assets/assets/images/c10.jpeg": "c2363bb4e6f41804598efef3db739ae7",
"assets/assets/images/c11.jpeg": "f4679833aab5411c0197aa4a9f183d4e",
"assets/assets/images/c12.jpeg": "e1f032262e8462754a91ebff97521283",
"assets/assets/images/c13.png": "17b0f4926a5976dba47241d9fa2d671d",
"assets/assets/images/c14.png": "695f1e226be0ff8a5a40762c56763eb3",
"assets/assets/images/c15.png": "33278fe92307dfd1ee05711a59f700bf",
"assets/assets/images/c16.png": "8e81660334752b746e2149710d094591",
"assets/assets/images/c17.png": "f1d0b73ef96fcf6d0e9e727f7f95801d",
"assets/assets/images/c2.jpeg": "a68d6de32c211ee87f15882012935281",
"assets/assets/images/c3.jpeg": "12df44003c664c6895d95299923e9ae3",
"assets/assets/images/c4.jpeg": "1e3c8450fdc7819b87307cbd9fa06adf",
"assets/assets/images/c5.jpeg": "9ae809bf7f772fcffc541d38c2c647e9",
"assets/assets/images/c6.jpeg": "eb6f7829fc3894cb02fa5919f907eb5c",
"assets/assets/images/c7.jpeg": "a0bb07f85979c550ba420b8af715aa3f",
"assets/assets/images/c8.jpeg": "2b07770925fc483454e935b6b364afbe",
"assets/assets/images/c9.jpeg": "027b734dd9b89409ce8a0f22925667e8",
"assets/assets/images/designIcon.png": "d22608023abde6773dc06da4a5f4565d",
"assets/assets/images/editingIcon.png": "d44bf4caa661343898fbc0520555508c",
"assets/assets/images/emailIcon.png": "12f9f2364d9af4d37f6f7dc6588abbd6",
"assets/assets/images/facebookIcon.png": "4eefb3a1203ba325155d1ac661b9e8dc",
"assets/assets/images/homeLogo.png": "8e19f9022084456d5e723063bef9f439",
"assets/assets/images/instagramIcon.png": "df99065eb02cba5d47854a6dc0ad04cb",
"assets/assets/images/mainLogo.png": "7480568cba924b0f639bdb1f2eb045c9",
"assets/assets/images/marketIcon.png": "0f6691ae914d2ec8afbcfbfdc90d0f4b",
"assets/assets/images/officeIcon.png": "6f2dc3f8d65ab93c266abe14b222d324",
"assets/assets/images/pakFlag.jpg": "1dbf774ef926dc8a16356b4a90f35ff9",
"assets/assets/images/pic1.jpg": "7377eadd754beeb07fcbe3df55d8195c",
"assets/assets/images/pic2.jpg": "46279f51bdbb9de1bf9503e4f567c942",
"assets/assets/images/pic3.jpg": "14da05151958321a44d4a67abf32360e",
"assets/assets/images/pic4.jpg": "49dceaa3a4ef4fb6f0a147f0911cca6f",
"assets/assets/images/portfolioLogo.png": "f7aac8dab1fe145a20b94225bc481c0a",
"assets/assets/images/seoIcon.png": "8b4823a811d4b0d54649a31cda31357a",
"assets/assets/images/ssProIcon.png": "e5322be990ccedeba9ff361222fcf450",
"assets/assets/images/teamIntro.png": "0baf759b8c72c30fdaa010e3339fe50e",
"assets/assets/images/teamLogo.png": "cd22d87a8e1afa6ecada6040ec5f0b8e",
"assets/assets/images/twitterIcon.png": "d706e4e52df885edaf623a1be7be92ce",
"assets/assets/images/uiIcon.png": "4363b565724cf6781e68bb2b6f35ab64",
"assets/assets/images/webDevIcon.png": "36454e4d62b872741876332314668bb2",
"assets/assets/images/youtubeIcon.png": "1de0e6f0e4e8323d12ca66205081c137",
"assets/assets/svg/aboutusSvg.svg": "7fef5bf7021a2fccb34f1ebda6ba1ded",
"assets/assets/svg/blogSvg.svg": "3a4997b3f06c865632ba775ef5e41f91",
"assets/assets/svg/homeSvg.svg": "b0912156b4e047146114d6847dee66e9",
"assets/assets/svg/menuSvg.svg": "24f282364076287d72d1a655adbdd26b",
"assets/assets/svg/messageSvg.svg": "956003c5c4e8313fbaa85c6d1b7e14ee",
"assets/assets/svg/portfolioSvg.svg": "f175fbce1eb3a81b0cf9fe2926f4e69f",
"assets/assets/svg/teamSvg.svg": "bb71d40a6e911739076d7840b1b51700",
"assets/assets/svg/upwardSvg.svg": "1210e7a17d36f1aec50b907424e00b91",
"assets/FontManifest.json": "be8b34aacf7d249f9ee9ced32425f343",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8b7836df7f1cf68f3d3565a7341213df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "163e91637c00151d0c1015498b5e8f21",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "778e17d3ef80b6e970d2bb691e202c7c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efab9e1984d5dcaaec3bfcc17619c323",
"/": "efab9e1984d5dcaaec3bfcc17619c323",
"main.dart.js": "d9cf36a89ab064ab0f5286bd491965c3",
"manifest.json": "59e5c2a4c450269cfd7069e5309a8d77",
"version.json": "27bef5186efa04a08261721f4466189b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
