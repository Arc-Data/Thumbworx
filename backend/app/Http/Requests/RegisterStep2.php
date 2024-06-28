<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterStep2 extends FormRequest
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
        $permanentAddress = [
            'house_number' => strip_tags($this->input('permanent_address.house_number')),
            'street' => strip_tags($this->input('permanent_address.street')),
            'barangay' => strip_tags($this->input('permanent_address.barangay')),
            'city' => strip_tags($this->input('permanent_address.city')),
            'province' => strip_tags($this->input('permanent_address.province')),
            'region' => strip_tags($this->input('permanent_address.region')),
            'country' => strip_tags($this->input('permanent_address.country')),
        ];

        $currentAddress = [
            'house_number' => strip_tags($this->input('current_address.house_number')),
            'street' => strip_tags($this->input('current_address.street')),
            'barangay' => strip_tags($this->input('current_address.barangay')),
            'city' => strip_tags($this->input('current_address.city')),
            'province' => strip_tags($this->input('current_address.province')),
            'region' => strip_tags($this->input('current_address.region')),
            'country' => strip_tags($this->input('current_address.country')),
        ];

        // Merge prepared data back into the request input
        $this->merge([
            'permanent_address' => $permanentAddress,
            'current_address' => $currentAddress,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'permanent_address.house_number' => 'required|string|max:10',
            'permanent_address.street' => 'required|string|max:100',
            'permanent_address.barangay' => 'required|string|max:100',
            'permanent_address.city' => 'required|string|max:100',
            'permanent_address.province' => 'required|string|max:100',
            'permanent_address.region' => 'required|string|max:100',
            'permanent_address.country' => 'required|string|max:100',

            'current_address.house_number' => 'required|string|max:10',
            'current_address.street' => 'required|string|max:100',
            'current_address.barangay' => 'required|string|max:100',
            'current_address.city' => 'required|string|max:100',
            'current_address.province' => 'required|string|max:100',
            'current_address.region' => 'required|string|max:100',
            'current_address.country' => 'required|string|max:100',
        ];
    }
}
