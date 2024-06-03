<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "first_name" => 'required|string|max:255',
            "middle_name" => 'required|string|max:255',
            "last_name" => 'required|string|max:255',
            "birth_date" => 'required|date', 
            "email" => 'required|string|email|max:255|unique:admin,email',
            "gender" => 'required|string|in:male,female,other',
            "marital_status" => 'required|string|in:single,married,divorced,widowed',
            "password" => 'required|string|min:8',
        ];
    }
}
