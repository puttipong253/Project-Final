<template>
    <v-dialog width="400px">
          <v-btn flat slot="activator">
          <v-icon>assignment_ind</v-icon>
            <span class="mr-2" >Register</span>
          </v-btn>
          <v-card>
              <v-card-title>
                  <h2>Register</h2>
              </v-card-title>
              <v-card-text>
                  <v-form>
                      <v-text-field label="Username"></v-text-field>
                      <v-text-field label="Password" type="password"></v-text-field>
                      <v-text-field label="Confirm Password" type="password"></v-text-field>
                      <v-text-field label="E-mail" type="email"></v-text-field>
                      <v-btn class="primary" type="summit">Summit</v-btn>
                  </v-form>
              </v-card-text>
          </v-card>
    </v-dialog>
</template>

<script>
export default {
    
}
</script>
