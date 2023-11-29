<template>
  <div class="flex justify-center">
    <form class="bg-white flex flex-col p-2 w-96 shadow-2xl">
      <label for="email" class="p-2 text-left">Email address</label>
      <input
        v-model="form.email"
        type="text"
        class="border-2 p-4"
        id="email"
        name="email"
      />

      <p
        v-for="error of v$.email.$errors"
        class="mt-1 text-right text-red"
        :key="error.$uid"
      >
        {{ error.$message }}
      </p>

      <label for="password" class="p-2 text-left">Password</label>
      <input
        v-model="form.password"
        type="password"
        class="border-2 p-4"
        id="password"
        name="password"
      />

      <p
        v-for="error of v$.password.$errors"
        class="mt-1 text-right text-red"
        :key="error.$uid"
      >
        {{ error.$message }}
      </p>

      <button
        @click.prevent="login"
        type="submit"
        class="bg-green mt-4 p-4 color-white font-medium uppercase"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { AuthenticationService } from "../service/AuthenticationService";
import { useRouter } from "vue-router";

const authService: AuthenticationService | undefined = inject(
  typeof AuthenticationService
);
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useValidate(rules, form);

function login() {
  console.log(form, !v$.value.$invalid);

  v$.value.$touch();
  if (v$.value.$error) {
    return;
  }
  authService?.login();
  router.push("/status");
}
</script>
