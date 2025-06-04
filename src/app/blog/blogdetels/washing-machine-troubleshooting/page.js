import Image from "next/image";
import Footer from "../../../Componets/Footer/Footer";
import Navbar from "../../../Componets/Navbar/Navbar";

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 mt-12 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Optimized Image with Next.js */}
          <div className="relative w-full h-96">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Refrigerator Repair"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Refrigerator Repair Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive guide to fixing common fridge issues efficiently.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <div className="relative w-10 h-10">
                <Image
                  src="https://images.unsplash.com/photo-1645034648304-6e07d766b2a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Author"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700">John Mechanic</p>
                <p>Published on May 31, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                If your refrigerator is not cooling properly, making strange
                noises, or leaking water, you&apos;re not alone. Many common
                fridge issues can be resolved at home with a little guidance
                and the right tools.
              </p>
              <p>
                This guide walks you through step-by-step troubleshooting tips,
                from checking the thermostat and cleaning the condenser coils
                to diagnosing a faulty compressor or motor.
              </p>
              <p>
                Learn how to handle freezer frost build-up, unusual vibrations,
                and water accumulation in crispers. Whether you&apos;re a DIY
                enthusiast or just want to avoid costly repairs, this article
                gives you the confidence to act.
              </p>
              <p className="font-semibold">
                Always unplug your appliance before doing any internal
                inspection or repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
