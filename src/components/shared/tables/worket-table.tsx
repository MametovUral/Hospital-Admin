import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash2, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
function WorketTable() {
  return (
    <Table className="">
      <TableHeader className="">
        <TableRow>
          <TableHead>№</TableHead>
          <TableHead>Rasmi</TableHead>
          <TableHead>F.I.Sh</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Amallar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, idx) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadl.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="">{invoice.totalAmount}</TableCell>
            <TableCell className="flex gap-2">
              <Button size={"icon"} variant={"ghost"}>
                <UserPen color="#3371EB" />
              </Button>
              <Button size={"icon"} variant={"ghost"}>
                <Trash2 color="red" className="hover:text-red-400" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default WorketTable;
