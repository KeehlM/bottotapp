module.exports = {
    isPassword:function(pwd){
        var reg = /^([A-Z]|[a-z]|\d){6,30}$/;
        if(reg.test(pwd)){
            return true;
        }else{
            return false;
        }
    },
    replacePos:function (str,frontLen,endLen){
        var len = str.length-frontLen-endLen;
        var xing = '';
        for (var i=0;i<len;i++) {
            xing+='*';
        }
        return str.substr(0,frontLen)+xing+str.substr(str.length-endLen);
    },
	isEmpty:function(object){
		for (var key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        if(typeof object == 'number'){
            return false
        }
        return true;    
	},
    isPhone:function(value){
        var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        if(reg.test(value)){
            return true
        }else{
            return false
        }
    }, 
	toQueryString:function(object,recursive){
		var that = this,
			paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;
        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(that.toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;
            if (that.isEmpty(value)) {
                value = '';
            } else if (value instanceof Date) {
                value = value.toLocaleString();
            }
            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }
        return params.join('&');
	},
	toQueryObjects:function(name, value, recursive){

		var self = this.toQueryObjects,
            objects = [],
            i, ln;
        if (value instanceof Array) {
            for (i = 0, ln = value.length; i < ln; i++) {
                if (recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }
            }
        }
        else if (value instanceof Object) {
            for (i in value) {
                if (value.hasOwnProperty(i)) {
                    if (recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }
            }
        }
        else {
            objects.push({
                name: name,
                value: value
            });
        }

        return objects;
	},
	isArray:function(obj){
		return obj instanceof Array
	},
	isObject:function(obj){
		return obj instanceof Object
	},
    //是否为正整数
    isNumber: function(s){
        var re = /^[0-9]+$/ ;
        return re.test(s)
    }  
    

}