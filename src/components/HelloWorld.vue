<template>
  <div style="height: 2000px;" class="searchBar">
    <!--<input id="keywords" v-model="a" :disabled="showit"/>
    <button @click="showsou">操作</button>
    <p ref="myWidth" v-if="showMe">{{ message }}</p>
    <button @click="getMyWidth">获取p元素宽度</button>
    <input type="button" @click="destroy" value="销毁" />
    <div v-for="i in list" style="text-align: center;">
      <div class="icon">1231</div>
    </div>-->

<!--    	<div v-if="fff">dasdasdas</div>-->
    	<iframe v-if="fff === true" src="./././static/iframe.html"></iframe>
    <button @click="show()">loading</button>
    <input v-focus/>
    <div v-demo:foo.a.b="message"></div>
  </div>
</template>

<script>
	import axios from 'axios'
	import api from '@/components/api/test'
	export default {
	name: 'BarRouter',
	data() {
		return {
			a: '',
			aaa: '',
			showit: false,
			showMe: false,
			message: '元素宽度',
			list: [1,2,3],
			fff: false
		}
	},
    directives: {
      focus: {
      // 指令的定义
        inserted: function (el, binding, vnode, oldVnode) {
         el.focus()
         console.log('<<' + el)
         console.log('<<' + JSON.stringify(binding))
         console.log('<<<' + vnode)
         console.log('<<<' + oldVnode)
      },
      demo: {
      	bind: function (el, binding, vnode) {
        var s = JSON.stringify
         el.innerHTML =
	      'name: '       + s(binding.name) + '<br>' +
	      'value: '      + s(binding.value) + '<br>' +
	      'expression: ' + s(binding.expression) + '<br>' +
	      'argument: '   + s(binding.arg) + '<br>' +
	      'modifiers: '  + s(binding.modifiers) + '<br>' +
	      'vnode keys: ' + Object.keys(vnode).join(', ')
      }
      }
    }
},
	methods: {
		showsou() {
			this.showit = false
			// document.getElementById("keywords").focus()
			this.$nextTick(function() {
				document.getElementById("keywords").focus()
			})
		},
		getMyWidth() {
			this.showMe = true
			this.$nextTick(() => {
				this.message = this.$refs.myWidth.offsetWidth;
			})
		},
		show () {
			this.fff = true
			this.aaa = 'www.baidu.com/' + Date.parse(new Date())
		},
		getaaa () {
		  console.log('loading finish>>>>>>>>>yyyyxxx')
		  api.test().then((res) => {
		    console.log('<<<successful')
		  })
		},
		destroy () {
		  this.$destroy()
		}	,
	  handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.getElementsByClassName('abc')[0].offsetTop
      console.log('scrollTop>>>>>>>>>' + scrollTop)
      console.log('offsetTop>>>>>>>>>' + offsetTop)
      if (scrollTop === offsetTop) {
      	this.fff = true
      } else {
      	this.fff = false
      }
      
    }
	},
//	beforeCreate: function() {
//		console.group('beforeCreate 创建前状态===============》');
//		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
//		console.log("%c%s", "color:red", "message: " + this.message); //undefined
//	},
	created: function() {
//		console.group('created 创建完毕状态===============》');
//  window.vueFun = function () {
//      //alert('helloaaaaayxd')
//     console.log('xxx' + this.message)
//     api.test().then((res) => {
//		    console.log('<<<successful1111111111111111')
//		   })
//     window.location.reload()
//  }
    window['vueFun'] = () => {
      console.log('xxx' + this.message)
       api.test().then((res) => {
		    console.log('<<<successful1111111111111111')
		   })
   //    window.location.reload()
    }
//  api.test().then((res) => {
//		    console.log('<<<successful')
//		  })
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:green", "data   : " + this.$data); //[object Object]  =>  已被初始化
		console.log("%c%s", "color:green", "message: " + this.message); //Welcome Vue  =>  已被初始化
	},
//	beforeMount: function() {
//		console.group('beforeMount 挂载前状态===============》');
//		console.log("%c%s", "color:green", "el     : " + (this.$el)); //已被初始化
//		console.log(this.$el); // 当前挂在的元素
//		console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
//		console.log("%c%s", "color:green", "message: " + this.message); //已被初始化
//	},
	mounted: function() {
//	  window.addEventListener('scroll', this.handleScroll)
//  this.getaaa()
		console.group('mounted 挂载结束状态===============》');
		console.log("%c%s", "color:green", "el     : " + this.$el); //已被初始化
		console.log(this.$el);
		console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
		console.log("%c%s", "color:green", "message: " + this.message); //已被初始化
	},
//	beforeUpdate: function() {
//	//	alert("更新前状态");
//		console.group('beforeUpdate 更新前状态===============》'); //这里指的是页面渲染新数据之前
//		console.log("%c%s", "color:green", "el     : " + this.$el);
//		console.log(this.$el);
//		console.log("%c%s", "color:green", "data   : " + JSON.stringify(this.$data));
//		console.log("%c%s", "color:green", "message: " + this.a);
//	//	alert("更新前状态2");
//	},
//	updated: function() {
//		console.group('updated 更新完成状态===============》');
//		console.log("%c%s", "color:green", "el     : " + this.$el);
//		console.log(this.$el);
//		console.log("%c%s", "color:green", "data   : " + this.$data);
//		console.log("%c%s", "color:green", "message: " + this.a);
//	},
//	beforeDestroy: function() {
//		console.group('beforeDestroy 销毁前状态===============》');
//		console.log("%c%s", "color:red", "el     : " + this.$el);
//		console.log(this.$el);
//		console.log("%c%s", "color:red", "data   : " + this.$data);
//		console.log("%c%s", "color:red", "message: " + this.message);
//	},
//	destroyed: function() {
//		console.group('destroyed 销毁完成状态===============》');
//		console.log("%c%s", "color:red", "el     : " + this.$el);
//		console.log(this.$el);
//		console.log("%c%s", "color:red", "data   : " + this.$data);
//		console.log("%c%s", "color:red", "message: " + this.message)
//	}
}
</script>

<style lang="scss" scoped>
  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
  .icon {
  	height: 0px;
  	width: 0px;
  	border-width:0 30px 30px;
    border-style:solid;
    border-color:transparent transparent #333;/*透明 透明  灰*/
    margin:40px auto;
  }
  .abc {
    width:100%;
    height: 100px;
  }
</style>