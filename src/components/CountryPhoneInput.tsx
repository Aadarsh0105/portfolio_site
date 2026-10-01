"use client";

import { ChevronDown } from "lucide-react";
import {
  CountrySelector,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";

interface CountryPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CountryPhoneInput({
  value,
  onChange,
}: CountryPhoneInputProps) {
  const {
    country,
    handlePhoneValueChange,
    inputValue,
    setCountry,
  } = usePhoneInput({
    defaultCountry: "in",
    preferredCountries: ["in", "us", "gb", "ae"],
    disableDialCodeAndPrefix: true,
    value,
    onChange: ({ phone }) => onChange(phone),
  });

  return (
    <div className="flex h-[42px] w-full rounded-xl border border-gray-300 bg-white transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/15">
      <CountrySelector
        selectedCountry={country.iso2}
        preferredCountries={["in", "us", "gb", "ae"]}
        onSelect={(selectedCountry) => {
          setCountry(selectedCountry.iso2, {
            focusOnInput: true,
          });
        }}
        renderButtonWrapper={({ rootProps }) => (
          <button
            {...rootProps}
            type="button"
            className="flex h-full shrink-0 items-center gap-1 rounded-l-xl border-0 border-r border-gray-300 bg-transparent px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            +{country.dialCode}
            <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
          </button>
        )}
      />

      <input
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={inputValue}
        onChange={handlePhoneValueChange}
        className="h-full min-w-0 flex-1 rounded-r-xl border-0 bg-transparent px-3 text-[14px] text-slate-900 outline-none"
      />
    </div>
  );
}
