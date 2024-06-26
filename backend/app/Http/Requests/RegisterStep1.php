<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class RegisterStep1 extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $sanitizedPersonalInfo = [
            'first_name' => strip_tags($this->input('first_name')),
            'last_name' => strip_tags($this->input('last_name')),
            'middle_name' => strip_tags($this->input('middle_name')),
            'email' => strip_tags($this->input('email')),
            'gender' => $this->input('gender'),
            'birth_date' => $this->input('birth_date'),
            'marital_status' => $this->input('marital_status'),
            'user_type' => $this->input('user_type'),
            'phone_number1' => $this->input('phone_number1'),
            'phone_number2' => $this->input('phone_number2'),
        ];

        $this->merge($sanitizedPersonalInfo);
    }
    
    protected function withValidator($validator)
    {
        // Validate birthdate and calculate age
        $validator->after(function ($validator) {
            if ($this->filled('birth_date')) {
                $birthdate = Carbon::parse($this->input('birth_date'));
                $age = $birthdate->diffInYears(Carbon::now());

                if ($age < 18) {
                    $validator->errors()->add('birth_date', 'You must be at least 18 years old.');
                }
            }
        });
    }

    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'middle_name' => 'required|string|max:255',
            'email' => 'required|email|max:50|unique:users,email',
            'gender' => 'required|string|in:male,female,other',
            'birth_date' => 'required|date',
            'marital_status' => 'required|string|in:single,married,divorced,widowed',
            'user_type' => 'required|string|in:driver,client',
            'phone_number1' => 'required|string|max:11',    
            'phone_number2' => 'nullable|string|max:11',
        ];
    }
}
