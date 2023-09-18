<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import { useRoute } from "vue-router";
import type { CustomerFullModel } from "@/models";
import { CustomerRepository } from "@/repository";

const router = useRoute();
const data: Ref<CustomerFullModel> = ref([]);
const CustomerRepo = new CustomerRepository();

</script>

<template>
  <header>
    <h1 class="text-center">
      Customer Profile
    </h1>
  </header>
  <main>
    <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" :value="data.first_name" required="" disabled>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" :value="data.last_name" required="" disabled>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" :value="data.email" disabled>
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" :value="data.address.address">
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="col-12">
            <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" :value="data.address.address2">
          </div>

          <div class="col-md-5">
            <label for="country" class="form-label">Country</label>
            <select class="form-select" id="country" required="" :value="data.address.city_id">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">State</label>
            <select class="form-select" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div class="col-md-3">
            <label for="zip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="" required="" :value="data.address.postal_code">
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <hr class="my-4">
      </div>
  </main>
</template>
