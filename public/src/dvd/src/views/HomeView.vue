<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import type { RentalFullModel } from "@/models";
import { RentalRepository } from "@/repository";

const data: Ref<Array<RentalFullModel>> = ref([]);

const RentalRepo = new RentalRepository();

RentalRepo.GetAll()
  .then(
    (rental: Array<RentalFullModel>) => {
      data.value = rental;
    }
  );

</script>

<template>
  <header>
    <h1 class="text-center">
      Dashboard
    </h1>
  </header>
  <main>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Inventory ID</th>
          <th scope="col">Customer ID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Rental Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row of data">
          <th scope="row">{{ row.rental_id }}</th>
          <td>{{ row.inventory_id }}</td>
          <td>{{ row.customer_id }}</td>
          <td>{{ row.customer.first_name }} {{ row.customer.last_name }}</td>
          <td>{{ row.rental_date }}</td>
        </tr>        
      </tbody>
    </table>
  </main>
</template>
