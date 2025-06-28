// src/metrics.ts
import si from 'systeminformation';

export async function getSystemMetrics() {
  const [cpu, mem, disk, net] = await Promise.all([
    si.currentLoad(),
    si.mem(),
    si.fsSize(),
    si.networkStats()
  ]);

  return {
    cpu: {
      load: cpu.currentLoad
    },
    memory: {
      total: mem.total,
      free: mem.free,
      used: mem.used
    },
    disk: disk.map(d => ({
      fs: d.fs,
      size: d.size,
      used: d.used,
      use: d.use
    })),
    network: net.map(n => ({
      iface: n.iface,
      rx_bytes: n.rx_bytes,
      tx_bytes: n.tx_bytes
    }))
  };
}