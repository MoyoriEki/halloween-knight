// ═══ 試遊できるマップ一覧 ═══
// 新しいマップを足したら import して MAP_FILES に追加するだけ。
// 数値（testLevel・敵配置など）は各 JSON 側で完結させ、本体にハードコードしない。
import m1 from './m1.json';
import m2 from './m2.json';
import m3 from './m3.json';

const MAP_FILES = [m1, m2, m3];

// マップ選択UI用のメタ情報付き一覧を返す。
export function getMapList() {
  return MAP_FILES.map(m => ({
    id: m.id || m.name,
    name: m.name || m.id,
    testLevel: m.testLevel || 1,
    cols: m.cols,
    rows: m.rows,
    enemyCount: (m.enemies || []).length,
    sortieLimit: m.sortieLimit || null,
    data: m,
  }));
}

// id からマップメタ情報を引く。
export function getMapById(id) {
  return getMapList().find(m => m.id === id) || null;
}
