<?php

namespace App\Services;

use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class ActiveDirectoryService
{

    private $baseUrl = 'https://ksuintegration.ksu.edu.sa/SSOStaff/';
    private $basicParameters = ["OperationGuid" => "00000000-0000-0000-0000-000000000000","ConsumerApplication" => "string"];

    /**
     * auth function using service 
     * @param  string  $userName
     * @param  string  $password
     *
     * @return array 
     */
    public function authService(string $userName, string $password): array
    {
        $response = Http::post($this->baseUrl . 'StaffStudentAuthentication', [
            "OperationGuid" => "00000000-0000-0000-0000-000000000000",
            "UserName" => $userName,
            "Password" => $password,
            "ConsumerApplication" => "string",
            "Type" => "string"
        ])->json();

        // check if login successful 
        if (!$response['ActionStatus']) {
            throw new NotFoundResourceException(__('The credentials entered does not match our records.'));
        }
        
        return $response;
    }

}
