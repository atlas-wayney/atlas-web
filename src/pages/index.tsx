import React from "react";
import NextLink from "next/link";
import { Alert, Card, CardBody, CardHeader, Button, Link, cn } from "@heroui/react";
import DotGrid from "@/components/dotgrid";
import TextType from "@/components/texttype";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 py-6 max-w-4xl mx-auto bg-white bg-opacity-50" style={{ opacity: 0.95 }}>
          <div className="text-black">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {/* Atlas */}
                <TextType 
                  text={["Atlas"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter=""
                  loop={false}
                />
            </h1>
            <p className="text-lg md:text-xl mb-6 font-light">
              We are Asia’s leading and trusted securities and derivatives market infrastructure, operating equity, fixed income, currency and commodity markets to the highest regulatory standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={NextLink}
                href="#identity"
                size="lg"
                color="primary"
                className="px-6 py-2"
              >
                Access Matrix
              </Button>
              <Button
                as={NextLink}
                href="#network"
                size="lg"
                variant="bordered"
                className="px-6 py-2 text-black border-black hover:bg-black hover:text-white"
              >
                Network
              </Button>
            </div>
          </div></div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        <div className="max-w-6xl mx-auto">
          <Alert
            classNames={{
              base: cn(
                [
                  "bg-default-50 dark:bg-background shadow-sm",
                  "border-1 border-default-200 dark:border-default-100",
                  "relative before:content-[''] before:absolute before:z-10",
                  "before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1",
                  "rounded-l-none border-l-0",
                  "before:bg-primary",
                ],
              ),
              mainWrapper: cn("pt-1"),
              iconWrapper: cn("dark:bg-transparent"),
            }}
            color="default"
            title="This is a demonstration application showcasing different user experiences
              and workflows. For any feedback, questions, or suggestions, please contact:"
          >
            <div className="flex items-center gap-1 mt-3">
              <Button
                className="bg-background text-default-700 font-medium border-1 shadow-small"
                variant="bordered"
              >
                <Link href="mailto:support@atlas.com" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  support@atlas.com
                </Link>
              </Button>
            </div>
          </Alert>
        </div>
      </div>

      <div id="identity" className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8 space-y-8">

          {/* Access Matrix Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Access Matrix</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Manage client groups, users, and access permissions across the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Manage Client Group</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Create and manage client group configurations.
                  </p>
                  <Button as={NextLink} href="/identity/client-groups" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Manage Client Groups
                  </Button>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Manage Client</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Add, edit, and manage client information.
                  </p>
                  <Button as={NextLink} href="/identity/clients" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Manage Clients
                  </Button>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Manage User</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Manage user accounts and permissions.
                  </p>
                  <Button as={NextLink} href="/identity/users" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Manage Users
                  </Button>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Manage Access Matrix</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Configure access controls and permissions matrix.
                  </p>
                  <Button as={NextLink} href="/identity/permissions" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Manage Access Matrix
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div id="network" className="container mx-auto px-6 py-8 space-y-8">

        {/* Network Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Network</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Manage colocation onboarding and market access configurations for securities and derivatives trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
              <CardHeader className="pb-0 pt-6 px-6">
                <h3 className="text-xl font-semibold">Colo Onboarding</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Manage colocation facility onboarding and setup.
                </p>
                <Button as={NextLink} href="/network/colo-onboarding" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                  Colo Onboarding
                </Button>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
              <CardHeader className="pb-0 pt-6 px-6">
                <h3 className="text-xl font-semibold">ST Market Access</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Securities trading market access configuration.
                </p>
                <Button as={NextLink} href="/network/st-market-access" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                  ST Market Access
                </Button>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
              <CardHeader className="pb-0 pt-6 px-6">
                <h3 className="text-xl font-semibold">DT Market Access</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Derivatives trading market access configuration.
                </p>
                <Button as={NextLink} href="/network/dt-market-access" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                  DT Market Access
                </Button>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
              <CardHeader className="pb-0 pt-6 px-6">
                <h3 className="text-xl font-semibold">DC Market Access</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Derivatives clearing market access configuration.
                </p>
                <Button as={NextLink} href="/network/dc-market-access" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                  DC Market Access
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div id="billing" className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8 space-y-8">

          {/* Billing Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Billing</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Manage billing schemes, calculations, and reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Billing Scheme</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Configure and manage billing scheme definitions.
                  </p>
                  <Button as={NextLink} href="/billing/scheme" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Billing Scheme
                  </Button>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Billing Calculation</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Calculate and review billing amounts.
                  </p>
                  <Button as={NextLink} href="/billing/calculation" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Billing Calculation
                  </Button>
                </CardBody>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col" shadow="sm">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h3 className="text-xl font-semibold">Billing Report</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Generate and view billing reports.
                  </p>
                  <Button as={NextLink} href="/billing/report" color="primary" variant="bordered" className="w-full mt-auto hover:bg-primary hover:text-white">
                    Billing Report
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
