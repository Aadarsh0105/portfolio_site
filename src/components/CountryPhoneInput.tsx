"use client";

interface CountryPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CountryPhoneInput({
  value,
  onChange,
}: CountryPhoneInputProps) {
  const localNumber = value.replace(/^\+91/, "");

  return (
    <div className="flex h-[42px] w-full rounded-xl border border-gray-300 bg-white transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/15">
      <span className="flex h-full shrink-0 items-center border-r border-gray-300 px-3 text-sm font-medium text-slate-700">
        +91
      </span>

      <input
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        maxLength={10}
        pattern="[0-9]{10}"
        value={localNumber}
        onChange={(event) => {
          const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
          onChange(digits ? `+91${digits}` : "");
        }}
        className="h-full min-w-0 flex-1 rounded-r-xl border-0 bg-transparent px-3 text-[14px] text-slate-900 outline-none"
      />
    </div>
  );
}
