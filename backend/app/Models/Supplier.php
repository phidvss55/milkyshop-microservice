<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Supplier extends Model
{
    protected $table = 'suppliers';

    protected $guarded = ['*'];

    const STATUS_PUBLIC = 1;
    const STATUS_PRIVATE = 0;

    const HOME = 1;

    protected $status = [
        1 => [
            'name' => 'Public',
            'class' => 'label-danger'
        ],
        0 => [
            'name' => 'Private',
            'class' => 'label-default'
        ],
    ];

    //get home product
    protected $home = [
        1 => [
            'name' => 'Public',
            'class' => 'label-primary'
        ],
        0 => [
            'name' => 'Private',
            'class' => 'label-default'
        ],
    ];

    public function getStatus() {
        return Arr::get($this->status, $this->s_active, '[N\A]');
    }

    public function getHome() {
        return Arr::get($this->home, $this->s_home, '[N\A]');
    }

    public function categories() {
        return $this->hasMany(Category::class, 's_supplier_id');
    }
}
