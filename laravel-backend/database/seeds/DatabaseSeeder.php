<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([ 
            'email' => 'admin@admin',
            'password' => bcrypt('password'),
            'name' => 'Admin',
            'surname' => 'Manager',
            'permission' => 1,
        ]);

        \DB::table('users')->insert([ 
            'email' => 'user@user',
            'password' => bcrypt('password'),
            'name' => 'User',
            'surname' => 'Dummy',
            'permission' => 2,
        ]);
    }
}
