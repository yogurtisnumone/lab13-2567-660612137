import { footerProps } from "@lib/types";

export default function Footer({year, fullName, id}: footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {year} {fullName} {id} </p>
    </div>
  );
}
