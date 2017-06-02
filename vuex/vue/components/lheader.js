Vue.component('lheader',{
	template:`
            <div class="weui-tabbar weui-wheader">
				<p class="ng-binding">{{name}}</p>
				<button @click="getSearchName()">Ok</button>				
			</div>
	`,
	data:function(){
        return {
        	name:'xiuxiu'
        }
	},

    //方式一 (从new Vuex.Store 内拿数据)
	computed:{
		//vuex的state里面拿数据
        name:function(){
           return this.$store.state.name
        }
	},

	//方式二
	// methods:{
 //        getSearchName:function(){
 //        	this.name=this.$store.state.searchName
 //        }
	// }
})