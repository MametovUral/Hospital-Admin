import WorketTable from "@/components/shared/tables/worket-table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRoles } from "@/constants";

import { Search } from "lucide-react";
import { useState } from "react";

const hh = {
  login: "worker9",
  password: "test123",
  fname: "Sardor",
  lname: "Abdullayev",
  mname: "Soliy o'g'li",
};

function WorkerPage() {
  const [isEditModal, setIsEditModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex border-b mb-4 pb-4  justify-between">
        <div className="relative mr-5   md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <div>
          <Button
            onClick={() => setIsEditModal(true)}
            className="capitalize"
            variant={"blue"}
          >
            + yangi xodim
          </Button>
        </div>
      </div>
      <div>
        <WorketTable />
      </div>
      <Dialog open={isEditModal} onOpenChange={() => setIsEditModal(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xodim qo'shish</DialogTitle>
            <DialogDescription>
              Kiritayotgan ma'lumotlaringgizga e'tiborliroq bo'ling.
            </DialogDescription>
          </DialogHeader>
          <form className="grid items-start gap-4">
            <div className="grid gap-3 grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Ismi</Label>
                <Input required type="text" id="name" placeholder="Asad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname">Familyasi</Label>
                <Input
                  required
                  type="text"
                  id="lastname"
                  placeholder="Asadov"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="fathername">Otasining ismi</Label>
                <Input
                  required
                  type="text"
                  id="fathername"
                  placeholder="Asad o'g'li"
                />
              </div>
              <div>
                <Label>Role</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Role ni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      {UserRoles.map((item) => (
                        <SelectItem key={item.role} value={item.role}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="login">Login</Label>
                <Input
                  required
                  type="text"
                  id="login"
                  placeholder="asad@gmail.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Parol">Parol</Label>
                <Input
                  required
                  type="password"
                  id="Parol"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="picture">Picture</Label>
              <Input required id="picture" type="file" />
            </div>

            <DialogFooter>
              <Button className="w-full" variant={"blue"} type="submit">
                Qo'shish
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default WorkerPage;
