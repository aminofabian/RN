"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Facebook, FacebookIcon, Github } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2 justify-center">
      <Button className="w-full" variant="outline">
        <GitHubLogoIcon className="w-4" />
      </Button>
      <Button className="w-full" variant="outline">
        <FaGoogle />
      </Button>
      <Button className="w-full" variant="outline">
        <FaFacebook />
      </Button>
    </div>
  );
};

export default Social;
