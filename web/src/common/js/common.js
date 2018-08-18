const common = {
    type(o){
        return Object.prototype.toString.call( o ).toLowerCase().match(/[a-z]+/g)[1]
    },
    isDate (d) {
        return common.type( d ) === 'date'
    },
    dateFormat( date, format ) {
		date = common.isDate(date) ? date : typeof date == 'number' ? new Date(date) : new Date();
		format = format || 'YYYY-MM-DD';
		var o = {
			//"y+" : date.getFullYear(),
			"M+" : date.getMonth()+1,                 //月份
			"D+" : date.getDate(),                    //日
			"h+" : date.getHours(),                   //小时
			"m+" : date.getMinutes(),                 //分
			"s+" : date.getSeconds(),                 //秒
			"q+" : Math.floor((date.getMonth()+3)/3), //季度
			"S"  : date.getMilliseconds()             //毫秒
		};
		if( /(Y+)/.test(format) ) format = format.replace(RegExp.$1, ( date.getFullYear() + "" ).substr(4 - RegExp.$1.length) );
		for(var k in o) {
			if( new RegExp("("+ k +")").test(format) ) format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
		return format;
	},
    getCookie(name){
         var strCookie=document.cookie;
         var arrCookie=strCookie.split("; ");
         for(var i=0;i<arrCookie.length;i++){
               var arr=arrCookie[i].split("=");
               if(arr[0]==name)return arr[1];
         }
         return "";
     }
}
export default common;
