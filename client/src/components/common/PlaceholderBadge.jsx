import React from 'react';
import { AlertCircle, FileText } from 'lucide-react';

export default function PlaceholderBadge({ 
  text = "Awaiting Document Confirmation", 
  tooltip = "Structured placeholder awaiting Star Tourism official document synchronization",
  size = "sm" 
}) {
  const isSm = size === "sm";

  return (
    <span 
      className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 shadow-xs ${
        isSm ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1'
      }`}
      title={tooltip}
    >
      <FileText className={isSm ? "w-3 h-3 text-amber-600" : "w-3.5 h-3.5 text-amber-600"} />
      <span>{text}</span>
    </span>
  );
}

export function DocumentNoticeBanner({ title = "Document Data Verification Notice", message }) {
  return (
    <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3.5 sm:p-4 text-amber-900 flex items-start gap-3 my-4 text-xs sm:text-sm">
      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-amber-900">{title}</p>
        <p className="text-amber-800/90 mt-0.5 leading-relaxed">
          {message || "The packages and rates displayed are authentic regional models prepared for Star Tourism. You can synchronize or update them at any time via the Admin Dashboard or by providing the official business document."}
        </p>
      </div>
    </div>
  );
}
