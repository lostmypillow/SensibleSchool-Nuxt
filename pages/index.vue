<script setup ;ang="ts">
const status = ref("")
const password = ref("")
</script>

<template>
    <div id="loginScreen" class="flex flex-column align-items-center justify-content-start w-full h-full">

<div id="loginContainer" class="flex flex-column align-items-center justify-content-center gap-1 lg:w-20rem lg:h-20rem sm:w-screen">
    <h1 v-if="status" id="logintitle" class="m-5 text-3xl">歡迎</h1>    
    <h1 v-else id="logintitle" class="m-3 text-3xl">登入北科帳號</h1>
    <form  novalidate @submit.prevent="onSubmit" class="flex flex-column gap-5 align-items-center justify-content-center">

    <InputGroup>
      <InputText  class="flex flex-grow-1 h-full" placeholder="學號 or 員工號碼" v-model="username" tabindex="1" autofocus />
      
    </InputGroup>
  

    <InputGroup id="password">
      <Password placeholder="密碼" v-model="password" tabindex="2" toggleMask :feedback="false"   />
    </InputGroup>
    <NuxtLink to="/another">
      <Button class="w-max justify-content-center gap-2" tabindex="3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-log-in">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
        登入
      </Button>
      </NuxtLink>
 
    </form>
</div>

<div id="footer">
<Divider layout="horizontal" class="mt-6">登入需要幫忙嗎?</Divider>
    <div class="flex align-items-center justify-content-center">
        <NuxtLink to="/forgetpw">
            <Button label="忘記密碼" class="text-base" severity="danger" outlined></Button>
        </NuxtLink>
        <Divider layout="vertical">OR</Divider>
        <Button label="新生註冊" outlined ></Button>
    </div>
</div>

</div>

  </template>