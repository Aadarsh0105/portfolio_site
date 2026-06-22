import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
};

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>
        </div>

        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}