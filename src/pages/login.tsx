import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParticlesBg from "particles-bg";
import { FormEvent, useRef } from "react";
import AuthService from "@/service/module/auth-module";

function Login() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const login = {
      login: loginRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };

    try {
      const res = await AuthService.login(login);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Card className="w-full bg-white/90  max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Tizimga kirish</CardTitle>
          <CardDescription>Login va parolingizni kiriting</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Login</Label>
              <Input id="email" ref={loginRef} type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Parol</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                ref={passwordRef}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <Button variant={"blue"} className="w-full mb-5">
              Kirish
            </Button>
            <div className="flex gap-2 text-sm text-left w-full">
              <p>Tezkor yordam ximati</p>{" "}
              <span className="font-bold cursor-pointer">
                +998 99 172 73 33
              </span>
            </div>
          </CardFooter>
        </form>
      </Card>
      <ParticlesBg type="cobweb" bg={true} />
    </section>
  );
}

export default Login;
