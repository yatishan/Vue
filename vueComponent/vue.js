
const {createApp} =Vue;

const Post = {
    template:`
    <div>
     <input v-model='title' placeholder='ender new title' /><br><br>
     <input v-model='content'placeholder='ender new content'/><br><br>
     <button @click='createPost'>submit</button>
    </div>
    `,
    data(){
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        createPost(){
            if(this.title & this.content){
            this.$emit('create-post',{
                title: this.title,content:this.content
            })
            this.title="";
            this.content="";
            } else {
                alert('data not found');
            }
            
        }
    }
};

const MyButton = {
  template: `
  <div>
   <h1><slot name='title'>{{ title }}</slot></h1>
   <h3><slot name='content'>{{ content}}</slot></h3>
  </div>`,
  props:{
    title: {
        type: String,
        default: "default title"
    },
    content:String
  }
};

createApp({
    components: {
        MyButton, Post
    },
    data(){
        return{
            count:10,
            posts:[
                {title:"Title One",content:"this is content one"},
                {title:"Title Two",content:"this is content two"},
                {title:"Title Three",content:"this is content three"},
            ]
        }
    },
    methods: {
        insertPost(data) {
            this.posts.push(data);
        }
    }
}).mount('#app');
