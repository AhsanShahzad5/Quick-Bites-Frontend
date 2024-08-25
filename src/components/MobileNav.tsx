import { Menu, CircleUserRound } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import colors from "@/styles/theme"
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks"


const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className={`${colors.mainTextColor}`} />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>

                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className={`${colors.mainTextColor}`} />
                            {user?.email}
                        </span>
                    ) : (
                        <span> Welcome to MernEats.com</span>
                    )}

                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks />
                    ) : (
                        <Button
                            onClick={() => loginWithRedirect()}
                            className={`flex-1 font-bold ${colors.mainBgColor}`}
                        >
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent >
        </Sheet>
    )
}

export default MobileNav