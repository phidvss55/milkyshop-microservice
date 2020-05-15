<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            'name'  => 'Phong Phu Ha Nam',
            'email' => 'phi@gmail.com',
            'password'  => Hash::make('123'),
        ]);
        DB::table('admins')->insert([
            'name'  => 'Alexander Alnord',
            'email' => 'alnord@gmail.com',
            'password'  => Hash::make('123'),
        ]);
    }
}
