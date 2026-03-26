import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            VITORY
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Portal de Gestion de Torneos de Tocho Bandera
          </p>
          <p className="text-sm text-green-600 font-medium">
            App inicializada correctamente
          </p>
          <Button className="w-full" disabled>
            Iniciar sesion (Sprint 1)
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
