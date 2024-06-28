<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRegisterStep3 extends FormRequest
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
        $client = [
            'company_name' => strip_tags($this->input('company_name')),
            'company_telephone_number' => strip_tags($this->input('company_telephone_number')),
            'company_address' => strip_tags($this->input('company_address')),
        ];

        $this->merge($client);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "company_name" => "required|string|max:255",
            "company_telephone_number" => "required|string",
            "company_address" => "required|string",
        ];
    }
}
