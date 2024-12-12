import React, { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, UserPlus, Activity, Search } from 'lucide-react';
import Link from "next/link";

const HomepageDashboard: FC = ({ }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Ponari - Admin Dashboard</h1>
          <p className="text-gray-500">Manajemen Akun Staff</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <UserPlus size={20} />
            <Link href="/dashboard-as-admin/register-new-staff">
            Tambah Staff Baru
            </Link>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari staff berdasarkan nama atau role..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Staff Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Users size={24} />
              Statistik Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Dokter</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Resepsionis</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Activity size={24} />
              Aktivitas Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Dr. Adam H. berhasil login (08:15)</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Akun resepsionis baru ditambahkan (07:30)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staff List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Daftar Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Nama</th>
                  <th className="px-4 py-3 text-left">Role</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3">Dr. Adam H.</td>
                  <td className="px-4 py-3">Dokter</td>
                  <td className="px-4 py-3">adam.h@ponari.com</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Aktif
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Link href="/dashboard-as-admin/edit-staff">Edit</Link>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3">Sarah M.</td>
                  <td className="px-4 py-3">Resepsionis</td>
                  <td className="px-4 py-3">sarah.m@ponari.com</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Aktif
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Link href="/dashboard-as-admin/edit-staff">Edit</Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomepageDashboard;
