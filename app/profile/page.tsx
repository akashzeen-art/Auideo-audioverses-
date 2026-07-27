"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const [mobile, setMobile] = useState("")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    if (mobile.trim()) setSaved(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1E2F] via-[#23233A] to-[#1E1E2F] text-[#EAEAEA]">
      <Header />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-[#2C2C3E]/70 backdrop-blur-md rounded-2xl shadow-2xl border border-[#3A3A55] p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-[#EAEAEA] mb-8 text-center">My Profile</h1>

          <div className="space-y-4">
            <label className="block text-sm text-[#EAEAEA]/70">Mobile Number</label>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => { setMobile(e.target.value); setSaved(false) }}
              className="bg-[#1E1E2F] border-[#3A3A55] text-[#EAEAEA] placeholder:text-[#EAEAEA]/40 focus:border-[#FFD369] w-full"
            />
            <Button
              className="w-full bg-[#FFD369] text-[#1E1E2F] hover:bg-[#FFD369]/90 font-bold mt-2"
              onClick={handleSave}
            >
              {saved ? "✓ Saved" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
