import BarChar from "@/components/barChar";
import Card, { CardContent, CardProps } from "@/components/card";
import PageTitle from "@/components/pageTitle";
import SalesCard, { SalesProps } from "@/components/salesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+80.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,231",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "573",
    description: "+201% since last hour",
    icon: Activity,
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Ridwan Mohamed",
    email: "ridwan@gmail.com",
    salesAmount: "+$1,999.00",
  },
  {
    name: "Hussein Mohamed",
    email: "hussein@gmail.com",
    salesAmount: "+$1,999.00",
  },
  {
    name: "Yasin Mohamed",
    email: "yasin@gmail.com",
    salesAmount: "+$1,999.00",
  },
  {
    name: "Mawlid Mohamed",
    email: "mawlid@gmail.com",
    salesAmount: "+$1,999.00",
  },
  {
    name: "Mustafe Mohamed",
    email: "mustafe@gmail.com",
    salesAmount: "+$1,999.00",
  },
];

export default function Home() {
  return (
    <div>
      <PageTitle title="Dashboard" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-8 transition-all">
        {cardData.map((data, index) => (
          <Card
            key={index}
            label={data.label}
            amount={data.amount}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-8 transition-all mt-10">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChar />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <p>Recent Sales</p>
          <p className="text-sm text-gray-400">
            You made 265 sales this month.
          </p>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              name={data.name}
              email={data.email}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
