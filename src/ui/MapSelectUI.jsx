import React from 'react';
import { GW, GH } from '../engine/constants.js';

/**
 * MapSelectUI — 単発試遊のマップ選択画面
 *
 * props:
 *   maps        — getMapList() の戻り（{ id, name, testLevel, cols, rows, enemyCount, sortieLimit, data }[]）
 *   onSelect(map) — マップ確定
 */
export default function MapSelectUI({ maps, onSelect }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'radial-gradient(circle at 50% 30%, #16203a, #0c0f1a)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', fontFamily: 'inherit',
    }}>
      <div style={{
        fontSize: 34, fontWeight: 900, letterSpacing: 6, color: '#e2e8f0',
        textShadow: '0 0 30px rgba(99,102,241,0.4)', marginBottom: 4,
      }}>
        ハロウィンナイト
      </div>
      <div style={{ fontSize: 13, color: '#64748b', letterSpacing: 2, marginBottom: 24 }}>
        試遊するマップを選ぶ
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 320px)',
        gap: 14, maxWidth: GW - 80, maxHeight: GH - 200,
        overflowY: 'auto', padding: 4, justifyContent: 'center',
      }}>
        {maps.map(m => (
          <button
            key={m.id}
            onClick={() => onSelect(m)}
            style={{
              textAlign: 'left', padding: '14px 16px',
              background: 'rgba(30,41,59,0.6)',
              border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10,
              cursor: 'pointer', color: '#e2e8f0', fontFamily: 'inherit',
              transition: 'border-color 0.1s, background 0.1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(49,57,89,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.background = 'rgba(30,41,59,0.6)'; }}
          >
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{m.name}</div>
            <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#94a3b8' }}>
              <span>Lv{m.testLevel}</span>
              <span>{m.cols}×{m.rows}</span>
              <span>敵{m.enemyCount}</span>
              {m.sortieLimit ? <span>出撃{m.sortieLimit}</span> : null}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
