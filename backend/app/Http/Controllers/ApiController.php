<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRegisterStep3;
use App\Http\Requests\DriverRegisterStep3;
use App\Http\Requests\RegisterStep1;
use App\Http\Requests\RegisterStep2;
use App\Http\Requests\RegistrationRequest;
use App\Mail\UserRegistered;
use App\Models\CurrentAddress;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\User; //IMPORTING THE USER MODEL CLASS | Hindi ginamit dito kasi walang register
use Illuminate\Support\Facades\Hash; //Hashing the password | Hindi rin ginamit dito kasi sa register of password eto. Maybe sa UserController pwede
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth; 
use Mail;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
      // Login API (POST, formdat) | Open methods
      public function login(Request $request)
      {
        $request->validate([ 
            "email" => "required|email",
            "password" => "required"
        ]);

        // JWTAuth | chinecheck kung existing ba eto sa DB if it exist it will return a JWT Token
        $token = JWTAuth::attempt([ //Default User table sya tumitingin
            "email" => $request->email,
            "password" => $request->password
        ]);

        if (!empty($token)) {

            //Eto ung lumalabas kapag successful yung login
            return response()->json([
                "message" => "User logged in successfully",
                "token" => $token, //Generating random token
            ], 200);
        }

        return response()->json([
            "message" => "Invalid details"
        ], 400);
    }
    public function validateStep1(RegisterStep1 $request) 
    {
        return response()->json([
            'message' => 'Form Valid'
        ]);
    }

    public function validateStep2(RegisterStep2 $request) 
    {
        return response()->json([
            'message' => 'Form Valid'
        ]);
    }

    public function clientValidateStep3(ClientRegisterStep3 $request) 
    {
        return response()->json([
            'message' => 'Form Valid'
        ]);
    }

    
    public function driverValidateStep3(DriverRegisterStep3 $request) 
    {
        return response()->json([
            'message' => 'Form Valid'
        ]);
    }

    public function register(Request $request)
    {
        Log::info("HEllo");
        $userData = $request->input('personal_info');

        $password = Str::random(12);
        $hashedPassword = Hash::make($password);

        $userData['password'] = $hashedPassword;
        $user = User::create($userData);
        
        $currentAddressInput = $request->input('current_address');
        $permanentAddressInput = $request->input('permanent_address');
        
        $currentAddressData = [
            'cur_house_number' => $currentAddressInput['house_number'],
            'cur_street' => $currentAddressInput['street'],
            'cur_barangay' => $currentAddressInput['barangay'],
            'cur_city' => $currentAddressInput['city'],
            'cur_province' => $currentAddressInput['province'],
            'cur_region' => $currentAddressInput['region'],
            'cur_country' => $currentAddressInput['country'],
        ];

        $permanentAddressData = [
            'per_house_number' => $permanentAddressInput['house_number'],
            'per_street' => $permanentAddressInput['street'],
            'per_barangay' => $permanentAddressInput['barangay'],
            'per_city' => $permanentAddressInput['city'],
            'per_province' => $permanentAddressInput['province'],
            'per_region' => $permanentAddressInput['region'],
            'per_country' => $permanentAddressInput['country'],
        ];

        $user->currentAddress()->create($currentAddressData);
        $user->permanentAddress()->create($permanentAddressData);

        if ($userData['user_type'] == "driver") {
            $user->driver()->create($request->input('driver'));
        } elseif ($userData['user_type'] == "client") {
            $user->client()->create($request->input('client'));
        }

        Mail::to($user->email)->send(new UserRegistered($user, $password));

        $token = JWTAuth::fromUser($user);

        return response()->json([
            "message" => "Form valid"
        ], 201);
    }

    //Profile API (GET) | Protected methods
    public function profile(){ //Kapag tinawag mo to ireread nya ung user details

        $userdata = auth()->user();

        return response()->json([
            "status" => true,
            "message" => "Profile data",
            "data" => $userdata
        ]);
    } 

    //Refresh Token API (GET) | Protected methods | New token and destroys old
    public function refreshToken(){
        
        $newToken = auth()->refresh();

        return response()->json([
            "status" => true,
            "message" => "New access token",
            "token" => $newToken
        ]);
    }

    //Logout API (GET) | Protected 
    // This is not needed for JWT as logouts are completely managed client side.
    // public function logout(){
        
    //     auth()->logout();

    //     return response()->json([
    //         "status" => true,
    //         "message" => "User logged out successfully"
    //     ]);
    // }
}
