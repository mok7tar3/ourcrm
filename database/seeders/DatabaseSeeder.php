<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Utility;
use Illuminate\Http\Request;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $routeName = optional(\Request::route())->getName();

        // if ($routeName != 'LaravelUpdater::database') {
            $this->call(UsersTableSeeder::class);
            $this->call(CustomFieldSeeder::class);
            $this->call(NotificationSeeder::class);
            $this->call(AiTemplateSeeder::class);
        // } else {
        //     Utility::languagecreate();
        // }
    }
}
