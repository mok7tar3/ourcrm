<?php
namespace Database\Seeders;

use App\Models\User;
use App\Models\Utility;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole        = Role::create(['name' => 'Admin']);
        $adminPermissions = [
            'manage-users',
            'view-users',
            'create-users',
            'edit-users',
            'delete-users',
            'lang-manage',
            'lang-change',
            'lang-create',
            'manage-tickets',
            'create-tickets',
            'edit-tickets',
            'delete-tickets',
            'manage-category',
            'create-category',
            'edit-category',
            'delete-category',
            'reply-tickets',
            'manage-setting',
            'manage-faq',
            'create-faq',
            'edit-faq',
            'delete-faq',
            'manage-knowledge',
            'create-knowledge',
            'edit-knowledge',
            'delete-knowledge',
            'manage-knowledgecategory',
            'create-knowledgecategory',
            'edit-knowledgecategory',
            'delete-knowledgecategory',
            'manage-company-settings'
        ];
        foreach($adminPermissions as $ap)
        {
            $permission = Permission::create(['name' => $ap]);
            $adminRole->givePermissionTo($permission);
        }
        $adminUser = User::create(
            [
                'name' => 'Admin',
                'role' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('1234'),
            ]
        );
        $adminUser->assignRole($adminRole);

        $agentRole        = Role::create(['name' => 'User']);
        $agentPermissions = [
            'view-users',
            'lang-change',
            'manage-tickets',
            'edit-tickets',
            'reply-tickets',
            'create-tickets'
        ];
        foreach($agentPermissions as $ep)
        {
            $permission = Permission::firstOrCreate(['name' => $ep]);
            $agentRole->givePermissionTo($permission);
        }

        $deanRole        = Role::create(['name' => 'Dean']);
        $deanPermissions = [
            'view-users',
            'lang-change',
            'manage-tickets',
            'edit-tickets',
            'reply-tickets',
            'create-tickets'
        ];

        foreach($deanPermissions as $ep)
        {
            $permission = Permission::firstOrCreate(['name' => $ep]);
            $deanRole->givePermissionTo($permission);
        }

        $supervisorRole        = Role::create(['name' => 'Supervisor']);
        $supervisorPermissions = [
            'lang-manage',
            'lang-change',
            'lang-create',
            'manage-tickets',
            'create-tickets',
            'edit-tickets',
            'delete-tickets',
            'reply-tickets',
            'manage-setting',
            'manage-faq',
            'create-faq',
            'edit-faq',
            'delete-faq',
            'manage-knowledge',
            'create-knowledge',
            'edit-knowledge',
            'delete-knowledge',
            'manage-knowledgecategory',
            'create-knowledgecategory',
            'edit-knowledgecategory',
            'delete-knowledgecategory',
        ];
        foreach($supervisorPermissions as $super)
        {
            $permission = Permission::firstOrCreate(['name' => $super]);
            $supervisorRole->givePermissionTo($permission);
        }

        $editorUser = User::create(
            [
                'name' => 'User',
                'role' => 'User',
                'email' => 'agent@example.com',
                'password' => Hash::make('1234'),
                'parent' => 1,
            ]
        );
        $editorUser->assignRole($agentRole);
        Utility::defaultEmail();
        Utility::userDefaultData();
        Utility::languagecreate();

        $data = [
            ['name'=>'local_storage_validation', 'value'=> 'jpg,jpeg,png,xlsx,xls,csv,pdf', 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name'=>'wasabi_storage_validation', 'value'=> 'jpg,jpeg,png,xlsx,xls,csv,pdf', 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name'=>'s3_storage_validation', 'value'=> 'jpg,jpeg,png,xlsx,xls,csv,pdf', 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name'=>'local_storage_max_upload_size', 'value'=> 2048000, 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name'=>'wasabi_max_upload_size', 'value'=> 2048000, 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name'=>'s3_max_upload_size', 'value'=> 2048000, 'created_by'=> 1, 'created_at'=> now(), 'updated_at'=> now()],
            ['name' => 'storage_setting', 'value' => 'local', 'created_by' => 1, 'created_at' => now(), 'updated_at' => now()]

        ];
        DB::table('settings')->insert($data);
    }
}
