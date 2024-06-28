<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DriverRegisterStep3 extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $driver = [
            'contact_person' => strip_tags($this->input('contact_person')),
            'contact_person_relationship' => strip_tags($this->input('contact_person_relationship')),
            'contact_person_phone_number' => strip_tags($this->input('contact_person_phone_number')),
            'contact_person_email' => strip_tags($this->input('contact_person_email')),
            'contact_person_address' => strip_tags($this->input('contact_person_address')),
        ];

        $this->merge($driver);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "contact_person" => "required|string|max:100",
            "contact_person_relationship" => "required|string|max:100",
            "contact_person_phone_number" => "required|string|max:12",
            "contact_person_email" => "required|email",
            "contact_person_address" => "required|string|max:255"
        ];
    }
}
