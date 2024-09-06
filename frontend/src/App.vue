<template>
  <div class="App">
    <h1>TSRPC Guestbook</h1>

    <div class="send">
      <textarea placeholder="Say something..." v-model="input" />
      <button v-on:click="send">Send</button>
    </div>

    <ul class="list">
      <li v-for="(v, i) in list" v-bind:key="i">
        <div class="id">id: {{v._id}}</div>
        <div class="content">{{ v.content }}</div>
        <div class="time">{{ v.time.toLocaleTimeString() }}</div>
        <div class="time"><button v-on:click="delFun(v._id)">删除</button></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { client } from "./client";
import { ResGetData } from "./shared/protocols/PtlGetData";

export interface AppData {
  input: string;
  list: ResGetData["data"];
}

export default defineComponent({
  name: "App",
  data() {
    return {
      input: "",
      list: [],
    } as AppData;
  },

  methods: {
    async loadList() {
      let ret = await client.callApi("GetData", {});

      // Error
      if (!ret.isSucc) {
        alert(ret.err.message);
        return;
      }

      // Success
      this.list = ret.res.data;
    },

    async send() {
      let ret = await client.callApi("AddData", {
        content: this.input,
      });

      // Error
      if (!ret.isSucc) {
        alert(ret.err.message);
        return;
      }

      // Success
      this.input = "";
      this.loadList();
    },
    
    async delFun(_id: string) {
      console.log(_id)
      await client.callApi("DelData", {
        _id
      });
      this.loadList();
    }
  },

  mounted() {
    this.loadList();
  },
});
</script>

<style lang="less">
@import "./App.less";
</style>
