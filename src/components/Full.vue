<template>
  <div class="full">
    <div class="client-data">
      <h2>{{ clientTittle }}</h2>
      <p class="title">Ф.И.О.</p>

      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-input"
            v-model.trim="form.lastName"
            @blur="$v.form.lastName.$touch()"
            placeholder="Фамилия*"
          />
          <span class="error" v-if="$v.form.lastName.$error">
            Поле обязательно для заполнения
          </span>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            v-model.trim="form.firstName"
            @blur="$v.form.firstName.$touch()"
            placeholder="Имя*"
          />
          <span class="error" v-if="$v.form.firstName.$error">
            Поле обязательно для заполнения
          </span>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            v-model.trim="form.patronomic"
            placeholder="Отчество"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="title">Дата рождения*</p>
          <input
            type="date"
            class="form-input"
            v-model="form.dateBirth"
            @blur="$v.form.dateBirth.$touch()"
          />
          <span class="error" v-if="$v.form.dateBirth.$error">
            Поле обязательно для заполнения
          </span>
        </div>
        <div class="col">
          <p class="title">Телефон*</p>
          <input
            type="text"
            class="form-input"
            v-model.trim="form.tel"
            @blur="$v.form.tel.$touch()"
            placeholder="77777777777"
          />
          <span class="error" v-if="$v.form.tel.$error">
            <template v-if="!$v.form.tel.validFormat">
              Поле должно содержать 11 цифр и начинаться с 7
            </template>
            <template v-else> Поле обязательно для заполнения </template>
          </span>
        </div>
      </div>

      <div class="row gender">
        <p class="title">Пол</p>
        <div class="col" v-for="item in sex" :key="item.index">
          <input
            class="radio"
            type="radio"
            :value="item.value"
            :id="item.value"
            v-model="form.sex"
          />
          <label class="" :for="item.value">
            {{ item.label }}
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="groupClient" class="title">Группа клиентов*</label>
          <select
            id="groupClient"
            class="multi-select"
            multiple
            v-model="form.groupClients"
          >
            <option
              v-for="item in groupClients"
              :value="item.value"
              :key="item.index"
              @blur="$v.form.groupClients.$touch()"
            >
              {{ item.label }}
            </option>
          </select>
          <span class="error" v-if="$v.form.groupClients.$error">
            Поле обязательно для заполнения
          </span>
        </div>

        <div class="col">
          <label for="doctor" class="title">Лечащий врач</label>
          <select id="doctor" class="select" v-model="form.doctor">
            <option
              v-for="item in doctor"
              :value="item.value"
              :key="item.index"
            >
              {{ item.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="checkbox col">
        <input type="checkbox" id="noSms" v-model="form.noSms" />
        <label for="noSms">Не отправлять СМС</label>
      </div>

      <div class="control">
        <div class="space"></div>
        <button
          type="button"
          class="btn btn-forward"
          @click="$emit('change-page', '.address', '.client-data')"
        >
          Далее
        </button>
      </div>
    </div>

    <div class="address disabled">
      <h2>{{ addressTittle }}</h2>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Индекс"
            v-model.trim="form.index"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Страна"
            v-model.trim="form.country"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Область"
            v-model.trim="form.region"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Город*"
            v-model.trim="form.city"
            @blur="$v.form.city.$touch()"
          />
          <span class="error" v-if="$v.form.city.$error">
            Поле обязательно для заполнения
          </span>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Улица"
            v-model.trim="form.street"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-input"
            placeholder="Дом"
            v-model.trim="form.house"
          />
        </div>
      </div>
      <div class="control">
        <button
          type="button"
          class="btn btn-back"
          @click="$emit('change-page', '.client-data', '.address')"
        >
          Назад
        </button>
        <div class="space"></div>
        <button
          type="button"
          class="btn btn-forward"
          @click="$emit('change-page', '.documents', '.address')"
        >
          Далее
        </button>
      </div>
    </div>

    <div class="documents disabled">
      <h2>{{ documentsTittle }}</h2>
      <div>
        <label class="title" for="documents">Тип документа*</label>
        <select id="documents" class="select" v-model="form.document">
          <option
            v-for="item in documents"
            :value="item.value"
            :key="item.index"
          >
            {{ item.label }}
          </option>
        </select>
        <div class="error" v-if="$v.form.document.$error">
          Поле обязательно для заполнения
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="serial" class="title">Серия</label>
          <input
            id="serial"
            type="text"
            class="form-input"
            placeholder="Серия"
            v-model.trim="form.serial"
          />
        </div>
        <div class="col">
          <label for="number" class="title">Номер</label>
          <input
            id="number"
            type="text"
            class="form-input"
            placeholder="Номер"
            v-model.trim="form.number"
          />
        </div>
        <div class="col">
          <label for="dateIsseud" class="title">Дата выдачи</label>
          <input
            id="dateIssued"
            type="date"
            class="form-input"
            v-model="form.dateIssued"
          />
        </div>
        <div class="col">
          <label for="issued" class="title">Кем выдан*</label>
          <input
            id="issued"
            type="text"
            class="form-input"
            placeholder="Кем выдан*"
            v-model.trim="form.issued"
            @blur="$v.form.issued.$touch()"
          />
          <div class="error" v-if="$v.form.issued.$error">
            Поле обязательно для заполнения
          </div>
        </div>
      </div>
      <div class="control">
        <button
          type="button"
          class="btn btn-back"
          @click="$emit('change-page', '.address', '.documents')"
        >
          Назад
        </button>
        <div class="space"></div>
      </div>
    </div>

    <div class="control submit">
      <div class="space"></div>
      <button 
        class="btn btn-submit" 
        type="submit" 
        :disabled="$v.$invalid"
      >
        Отправить форму
      </button>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Full",

  props: ["clientTittle", "addressTittle", "documentsTittle"],

  data() {
    return {
      sex: [
        {
          value: "male",
          label: "Мужчина",
        },
        {
          value: "female",
          label: "Женщина",
        },
      ],
      groupClients: [
        {
          value: "VIP",
          label: "VIP",
        },
        {
          value: "Problem",
          label: "Проблемные",
        },
        {
          value: "OMS",
          label: "ОМС",
        },
      ],
      doctor: [
        {
          value: "Ivanov",
          label: "Иванов",
        },
        {
          value: "Zakharov",
          label: "Захаров",
        },
        {
          value: "Chernysheva",
          label: "Чернышева",
        },
      ],
      documents: [
        {
          value: "Passport",
          label: "Паспорт",
        },
        {
          value: "birthCertificate",
          label: "Св-во о рождении",
        },
        {
          value: "driveLicense",
          label: "Вод. удостоверение",
        },
      ],
      form: {
        firstName: "",
        lastName: "",
        patronomic: "",
        dateBirth: "",
        tel: "",
        sex: "male",
        groupClients: ["OMS"],
        doctor: "Ivanov",
        noSms: false,
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        document: "Passport",
        serial: "",
        number: "",
        dateIssued: "",
        issued: "",
      },
    };
  },

  validations: {
    form: {
      firstName: { required },
      lastName: { required },
      dateBirth: { required },
      tel: {
        required,
        validFormat: (val) => /^7\d{10}$/.test(val),
      },
      groupClients: { required },
      city: { required },
      document: { required },
      issued: { required },
    },
  },
};
</script>