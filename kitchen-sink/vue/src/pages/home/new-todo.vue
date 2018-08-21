<template>
    <div>
        <f7-fab position="right-bottom" morph-to=".demo-fab-fullscreen-sheet.fab-morph-target">
        <f7-icon ios="f7:add" md="material:add"></f7-icon>
    </f7-fab>
        <div class="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
        <f7-block-title>ADD TODO</f7-block-title>
        <f7-list inline-labels no-hairlines-md>
        <f7-list-item>
            <f7-label>Title</f7-label>
            <f7-input :value="holderTitle" @input="holderTitle = $event.target.value" type="text" placeholder="Insert a title" clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
            <f7-label>Description</f7-label>
            <f7-input :value="holderText" @input="holderText = $event.target.value" type="textarea" placeholder="Insert a description"></f7-input>
        </f7-list-item>
        </f7-list>
        <f7-block>
        <f7-row tag="p">
            <f7-col tag="span">
                <f7-button class="fab-close" big color="red">Cancel</f7-button>
            </f7-col>
            <f7-col tag="span">
                <f7-button class="fab-close" big fill  @click="add_todo">Submit</f7-button>
            </f7-col>
        </f7-row>
        </f7-block>
        </div>
    </div>
</template>
<script>
import { f7Fab, f7Label, f7Input, f7Row,f7Col,f7Button, f7Block, f7Icon} from 'framework7-vue'
export default {
    data(){
    return{
      holderTitle:"",
      holderText:"",
    };
  },
    methods: {
        add_todo: function() {
        console.log("probando", this.holderText)
        this.$store.dispatch("ADD_TODO", {title:this.holderTitle, description:this.holderText});
        }
    },
    components:{
        f7Fab, f7Label, f7Input, f7Row,f7Col,f7Button, f7Block, f7Icon
    }
}
</script>
