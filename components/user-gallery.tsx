"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface RandomUser {
  name: {
    first: string
    last: string
  }
  location: {
    city: string
    country: string
  }
  picture: {
    large: string
  }
  login: {
    uuid: string
  }
}

export function UserGallery() {
  const [users, setUsers] = useState<RandomUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10")
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }
        const data = await response.json()
        setUsers(data.results)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="relative">
      <div className="flex w-full gap-6 overflow-x-auto pb-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="w-[280px] shrink-0">
                <CardHeader>
                  <Skeleton className="mx-auto size-24 rounded-full" />
                </CardHeader>
                <CardContent className="text-center">
                  <Skeleton className="mx-auto h-6 w-32" />
                </CardContent>
                <CardFooter className="justify-center">
                  <Skeleton className="mx-auto h-4 w-24" />
                </CardFooter>
              </Card>
            ))
          : users.map(user => (
              <Card key={user.login.uuid} className="w-[280px] shrink-0">
                <CardHeader>
                  <Image
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    width={96}
                    height={96}
                    className="mx-auto size-24 rounded-full object-cover"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold">
                    {user.name.first} {user.name.last}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-muted-foreground">
                    {user.location.city}, {user.location.country}
                  </p>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  )
}
