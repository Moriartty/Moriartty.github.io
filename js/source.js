let headerData = {
	userName:'Moriarty',
	avatar:'./images/ic_launcher.png',
	job:"I'm a Front-End engineer",
	outLinks:[
		{iconURL:"./images/github.svg",href:"https://github.com/Moriartty",qrcode:""},
		{iconURL:"./images/wechat.svg",href:"",qrcode:"./images/WechatIMG1.jpeg"},
		{iconURL:"./images/steam.svg",href:"",qrcode:"",tip:"肥肠柚猫饼"}
	],
	baseInfo:{
		"Age":'23',
		"Working At":'TCL云创科技有限公司',
		"Phone":'13889446741',
		"Email":'Moriarty_C@163.com'
	}
};
let aboutSectionData = {
	aboutSectionAvatar:"./images/section-title-avatar.png",
	aboutSectionSpan:"ABOUT",
	aboutSectionTip:"DO YOU WAT TO KNOW ME?",
	introTitle:"WHO AM I?",
	introContent:"我是陈冰，江西新余人，毕业于大连理工大学软件学院，就读专业为网络安全。"+
				"写过C和Java，独立做过几个Andriod小应用和小程序,现在阴差阳错成为了一名渣前端，跟在大佬后面捡骨头吃(･ェ･。)"+
				"是一流的韭菜，二流的肥宅，三流的码畜，还请各位大佬多多关照ヾ(･ε･｀*)",
	skills:[
		{title:'Coding programs',content:[
			{name:"HTML/CSS",val:"90%"},
			{name:"JS",val:"80%"},
			{name:"JAVA",val:"70%"},
			{name:"Python",val:"50%"}
		]},
		{title:"Others",content:[
			{name:"Linux",val:"60%"},
			{name:"Git",val:"60%"},
			{name:"Nginx",val:"70%"}
		]}
	]
};
let workSectionData = {
	projectInfoList:[
		{projName:"TCL通讯OA系统--轻办公",date:"2018.01-2018.07",character:"web前端负责人",
			points:[
				"负责确定项目完整需求和前端开发使用技术及若干开发文档和用户使用手册编写",
				"前端采用React、Redux、ES6、Webpack进行项目开发和资源管理，采用ajax和mock.js进行数据交互和测试，使用完整的Ant Design设计风格和组件"
			]
		},
		{projName:"TCL通讯UserCare项目",date:"2017.12-2018.04",character:"web前端工程师",
			points:[
				"接手于他人，参与部分需求的制定，负责整个项目的前端维护和新模块的开发",
				"后端采用Spring+SpringMVC+Hibernate，前端使用传统架构结合React进行开发"
			]
		},
		{projName:"TCL通讯办公管理系统--Simplex",date:"2017.09-2018.08",character:"web前端工程师",
			points:[
				"前端部分采用JSP结合struts2标签Freemarker构建框架，利用artTemplate、ECharts、jquery、bootStrap等辅助工具库完成各类型页面、报表的开发",
				"个人负责产品迭代、会议管理、员工周报等多个模块的前端开发及独立承担整个项目的前端维护工作",
				"能够与后端同事共同商议需求，确定开发细节规范，完成接口对接及测试工作"
			]
		}
	],
	sliderImages:[
		{url:"./images/slider-0.png",caption:''},
		{url:"./images/slider-1.png",caption:''},
		{url:"./images/slider-2.png",caption:''},
		{url:"./images/slider-3.png",caption:''},
		{url:"./images/slider-4.png",caption:''},
		{url:"./images/slider-5.png",caption:''},
	],
	workshowList:[
		{category:"Web",id:"web",profit:[
			{projName:"Simplex",link:'http://simplex.tclcom.com/pms/webpages/index.jsp'},
			{projName:"UserCare",link:"http://usercare-test.tclclouds.com/api/_usercare/newSurvey.html?surveyType=2018NPS"},
			{projName:"轻办公"},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
		]},
		{category:'Andriod',id:"android",profit:[
			{projName:"Running Man",link:"https://github.com/Moriartty/RunningMan"},
			{projName:"基于社交平台的通讯录",link:"https://github.com/Moriartty/Contacts"},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
		]},
		{category:'微信小程序',id:"wxxcx",profit:[
			{projName:'MeetingX',link:"https://github.com/Moriartty/MeetingX"},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
		]},
		{category:"Java",id:"java",profit:[
			{projName:'情感分析系统',link:"https://github.com/Moriartty/Emotion_Analysis"},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
			{projName:""},
		]}
	]
}
let honorSectionData = [
	{category:"school",icon:"./images/school-honor.svg",color:"#bae637",honorList:[
		{details:"获得 CET-6证书"},
		{details:"本科毕业论文选为校级优秀论文，优秀率约为5%"}

	]},
	{category:"work",icon:"./images/work-honor.svg",color:"#36cfc9",honorList:[
		{details:"获得TCL集团2017届优秀雏鹰奖，获奖率10%"}
	]},
	{category:"others",icon:"./images/others-honor.svg",color:"#40a9ff",honorList:[
		{details:"发明专利《一种联系人数据管理方法及其管理系统》第一发明人，已受理"},
		{details:"发明专利《一种联系人多信息二维码的生成、分享和后台自动监控处理的方法》第一发明人，已受理"},
		{details:"发明专利《移动终端及其生成动作分类模型的方法、存储装置》唯一发明人，已受理"}
	]},
]